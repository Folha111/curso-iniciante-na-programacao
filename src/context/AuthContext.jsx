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
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw new Error(error.message)
  }, [])

  const register = useCallback(async (email, password, name) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name, role: 'aluno', plan: 'free' } },
    })
    if (error) throw new Error(error.message)
    return data // { user, session }
  }, [])

  const logout = useCallback(async () => {
    await supabase.auth.signOut()
    setUser(null)
  }, [])

  const updateUser = useCallback(async (updates) => {
    if (!user) return
    const { password, ...profileUpdates } = updates
    if (Object.keys(profileUpdates).length > 0) {
      await supabase.from('profiles').update(profileUpdates).eq('id', user.id)
    }
    if (password) {
      await supabase.auth.updateUser({ password })
    }
    setUser((prev) => ({ ...prev, ...profileUpdates }))
  }, [user])

  const refreshUser = useCallback(async () => {
    const { data: { session } } = await supabase.auth.getSession()
    if (session?.user) await fetchAndSetUser(session.user)
  }, [])

  const forceSetPlan = useCallback(async (plan) => {
    setUser((prev) => prev ? { ...prev, plan } : prev)
    // Persiste no auth metadata para sobreviver a re-fetches
    await supabase.auth.updateUser({ data: { plan } })
  }, [])

  // Admin: list all users from profiles table
  const [users, setUsers] = useState([])
  const fetchUsers = useCallback(async () => {
    const { data } = await supabase.from('profiles').select('*').order('created_at')
    setUsers(data || [])
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
    await supabase.from('profiles').update({ role }).eq('email', email)
    await fetchUsers()
  }, [fetchUsers])

  if (loading) return null

  return (
    <AuthContext.Provider value={{
      user,
      login,
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
