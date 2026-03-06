import { createContext, useContext, useState, useMemo, useCallback } from 'react'

const USERS = [
  { email: 'bernardosch.borba@hotmail.com', password: '123456', name: 'Bernardo', role: 'admin' },
  { email: 'admin@curso.com',               password: 'admin123',  name: 'Admin',    role: 'admin' },
  { email: '123@gmail.com',                 password: '123',       name: '123',      role: 'admin' },
  { email: 'soletti@gmail.com',             password: '123',       name: 'Soletti',  role: 'admin' },
  { email: 'aluno@curso.com',               password: 'aluno123',  name: 'Aluno Demo', role: 'aluno' },
  { email: 'aluno@gmail.com',               password: '123',       name: 'Aluno',    role: 'aluno' },
]

export { USERS }

function loadUsersFromStorage() {
  try {
    const raw = localStorage.getItem('users_data')
    const stored = raw ? JSON.parse(raw) : []
    // Merge: keep stored users but always include hardcoded USERS
    const storedEmails = stored.map((u) => u.email)
    const extra = stored.filter((u) => !USERS.find((b) => b.email === u.email))
    const merged = [...USERS, ...extra]
    localStorage.setItem('users_data', JSON.stringify(merged))
    return merged
  } catch {
    return USERS
  }
}

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user')
    return saved ? JSON.parse(saved) : null
  })

  const [usersData, setUsersData] = useState(loadUsersFromStorage)

  const users = useMemo(
    () => usersData.map(({ password: _password, ...rest }) => rest),
    [usersData]
  )

  const login = useCallback((email, password) => {
    const currentUsers = loadUsersFromStorage()
    const found = currentUsers.find((u) => u.email === email && u.password === password)
    if (found) {
      const userData = { email: found.email, name: found.name, role: found.role }
      localStorage.setItem('user', JSON.stringify(userData))
      setUser(userData)
      return true
    }
    return false
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem('user')
    setUser(null)
  }, [])

  const addUser = useCallback((userData) => {
    setUsersData((prev) => {
      const next = [...prev, userData]
      localStorage.setItem('users_data', JSON.stringify(next))
      return next
    })
  }, [])

  const removeUser = useCallback((email) => {
    setUsersData((prev) => {
      const next = prev.filter((u) => u.email !== email)
      localStorage.setItem('users_data', JSON.stringify(next))
      return next
    })
  }, [])

  const updateUserRole = useCallback((email, role) => {
    setUsersData((prev) => {
      const next = prev.map((u) => (u.email === email ? { ...u, role } : u))
      localStorage.setItem('users_data', JSON.stringify(next))
      return next
    })
    setUser((prev) => {
      if (prev && prev.email === email) {
        const updated = { ...prev, role }
        localStorage.setItem('user', JSON.stringify(updated))
        return updated
      }
      return prev
    })
  }, [])

  const updateUser = useCallback((updates) => {
    setUsersData((prev) => {
      const next = prev.map((u) =>
        u.email === JSON.parse(localStorage.getItem('user') || '{}').email
          ? { ...u, ...updates }
          : u
      )
      localStorage.setItem('users_data', JSON.stringify(next))
      return next
    })
    setUser((prev) => {
      if (!prev) return prev
      const updated = { ...prev, ...updates }
      localStorage.setItem('user', JSON.stringify(updated))
      return updated
    })
  }, [])

  const value = useMemo(
    () => ({ user, login, logout, users, addUser, removeUser, updateUserRole, updateUser }),
    [user, login, logout, users, addUser, removeUser, updateUserRole, updateUser]
  )

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
