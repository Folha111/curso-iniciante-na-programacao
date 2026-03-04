import { createContext, useContext, useState } from 'react'

const CREDENTIALS = {
  email: 'bernardosch.borba@hotmail.com',
  password: '123456',
}

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user')
    return saved ? JSON.parse(saved) : null
  })

  function login(email, password) {
    if (email === CREDENTIALS.email && password === CREDENTIALS.password) {
      const userData = { email, name: 'Bernardo' }
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
