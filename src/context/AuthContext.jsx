import { createContext, useContext, useState } from 'react'

const USERS = [
  { email: 'bernardosch.borba@hotmail.com', password: '123456', name: 'Bernardo', role: 'admin' },
  { email: 'admin@curso.com',               password: 'admin123',  name: 'Admin',    role: 'admin' },
  { email: 'aluno@curso.com',               password: 'aluno123',  name: 'Aluno Demo', role: 'aluno' },
]

const AuthContext = createContext(null)

export { USERS }

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user')
    return saved ? JSON.parse(saved) : null
  })

  function login(email, password) {
    const found = USERS.find((u) => u.email === email && u.password === password)
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

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
