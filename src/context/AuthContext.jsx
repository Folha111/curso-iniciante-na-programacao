import { createContext, useContext, useState } from 'react'

const USERS = [
  { email: 'bernardosch.borba@hotmail.com', password: '123456', name: 'Bernardo', role: 'admin' },
  { email: 'admin@curso.com',               password: 'admin123',  name: 'Admin',    role: 'admin' },
  { email: 'aluno@curso.com',               password: 'aluno123',  name: 'Aluno Demo', role: 'aluno' },
]

export { USERS }

function loadUsersFromStorage() {
  try {
    const raw = localStorage.getItem('users_data')
    if (!raw) {
      localStorage.setItem('users_data', JSON.stringify(USERS))
      return USERS
    }
    return JSON.parse(raw)
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

  const users = usersData.map(({ password: _password, ...rest }) => rest)

  function login(email, password) {
    const currentUsers = loadUsersFromStorage()
    const found = currentUsers.find((u) => u.email === email && u.password === password)
    if (found) {
      const userData = { email: found.email, name: found.name, role: found.role }
      localStorage.setItem('user', JSON.stringify(userData))
      setUser(userData)
      return true
    }
    return false
  }

  function logout() {
    localStorage.removeItem('user')
    setUser(null)
  }

  function addUser(userData) {
    setUsersData((prev) => {
      const next = [...prev, userData]
      localStorage.setItem('users_data', JSON.stringify(next))
      return next
    })
  }

  function removeUser(email) {
    setUsersData((prev) => {
      const next = prev.filter((u) => u.email !== email)
      localStorage.setItem('users_data', JSON.stringify(next))
      return next
    })
  }

  function updateUserRole(email, role) {
    setUsersData((prev) => {
      const next = prev.map((u) => (u.email === email ? { ...u, role } : u))
      localStorage.setItem('users_data', JSON.stringify(next))
      // Also update current session if it's the logged-in user
      if (user && user.email === email) {
        const updatedUser = { ...user, role }
        localStorage.setItem('user', JSON.stringify(updatedUser))
        setUser(updatedUser)
      }
      return next
    })
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, users, addUser, removeUser, updateUserRole }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
