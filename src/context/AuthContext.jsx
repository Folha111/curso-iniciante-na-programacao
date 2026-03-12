import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase'

const AuthContext = createContext(null)

function buildUser(supabaseUser, profile) {
  return {
    id: supabaseUser.id,
    email: supabaseUser.email,
    name: profile?.name || supabaseUser.user_metadata?.name || supabaseUser.email,
    role: profile?.role || supabaseUser.user_metadata?.role || 'aluno',
    plan: profile?.plan || supabaseUser.user_metadata?.plan || 'free',
    avatar: profile?.avatar_url || supabaseUser.user_metadata?.avatar_url || null,
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  async function fetchAndSetUser(supabaseUser) {
    if (!supabaseUser) { setUser(null); return }
    try {
      let { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', supabaseUser.id)
        .single()

      // Cria perfil se não existir (caso o trigger falhe)
      if (!profile) {
        const { data: newProfile } = await supabase
          .from('profiles')
          .insert({
            id: supabaseUser.id,
            email: supabaseUser.email,
            name: supabaseUser.user_metadata?.name || supabaseUser.email,
            role: supabaseUser.user_metadata?.role || 'aluno',
            plan: supabaseUser.user_metadata?.plan || 'free',
          })
          .select()
          .single()
        profile = newProfile
      }

      setUser(buildUser(supabaseUser, profile))
    } catch (err) {
      console.error('fetchAndSetUser error:', err)
      setUser(buildUser(supabaseUser, null))
    }
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      fetchAndSetUser(session?.user ?? null).finally(() => setLoading(false))
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      fetchAndSetUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const login = useCallback(async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw new Error(error.message)
    await fetchAndSetUser(data.user)
  }, [])

  const register = useCallback(async (email, password, name) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name, role: 'aluno', plan: 'free' },
        emailRedirectTo: `${window.location.origin}/dashboard`,
      },
    })
    if (error) throw new Error(error.message)
    return data // { user, session }
  }, [])

  const loginWithGoogle = useCallback(async (redirectTo) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: redirectTo || `${window.location.origin}/dashboard` },
    })
    if (error) throw new Error(error.message)
  }, [])

  const logout = useCallback(async () => {
    await supabase.auth.signOut()
    setUser(null)
  }, [])

  const updateUser = useCallback(async (updates) => {
    if (!user) return
    try {
      const { password, ...profileUpdates } = updates
      if (Object.keys(profileUpdates).length > 0) {
        await supabase.from('profiles').update(profileUpdates).eq('id', user.id)
      }
      if (password) {
        await supabase.auth.updateUser({ password })
      }
      setUser((prev) => ({ ...prev, ...profileUpdates }))
    } catch (err) {
      console.error('updateUser error:', err)
      throw err
    }
  }, [user])

  const refreshUser = useCallback(async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (session?.user) await fetchAndSetUser(session.user)
    } catch (err) {
      console.error('refreshUser error:', err)
    }
  }, [])

  const forceSetPlan = useCallback(async (plan) => {
    setUser((prev) => prev ? { ...prev, plan } : prev)
    try {
      // Persiste no auth metadata para sobreviver a re-fetches
      await supabase.auth.updateUser({ data: { plan } })
    } catch (err) {
      console.error('forceSetPlan error:', err)
    }
  }, [])

  // Admin: list all users from profiles table
  const [users, setUsers] = useState([])
  const fetchUsers = useCallback(async () => {
    try {
      const { data } = await supabase.from('profiles').select('*').order('created_at')
      setUsers(data || [])
    } catch (err) {
      console.error('fetchUsers error:', err)
    }
  }, [])

  const addUser = useCallback(async (userData) => {
    // Admin user creation via Edge Function
    const { data, error } = await supabase.functions.invoke('admin-create-user', {
      body: userData,
    })
    if (error) throw new Error(error.message)
    await fetchUsers()
    return data
  }, [fetchUsers])

  const removeUser = useCallback(async (email) => {
    const { error } = await supabase.functions.invoke('admin-delete-user', {
      body: { email },
    })
    if (error) throw new Error(error.message)
    await fetchUsers()
  }, [fetchUsers])

  const updateUserRole = useCallback(async (email, role) => {
    try {
      await supabase.from('profiles').update({ role }).eq('email', email)
      await fetchUsers()
    } catch (err) {
      console.error('updateUserRole error:', err)
      throw err
    }
  }, [fetchUsers])

  if (loading) return null

  return (
    <AuthContext.Provider value={{
      user,
      login,
      loginWithGoogle,
      register,
      logout,
      updateUser,
      refreshUser,
      forceSetPlan,
      users,
      fetchUsers,
      addUser,
      removeUser,
      updateUserRole,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
