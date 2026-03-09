import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import { ModulesProvider } from './context/ModulesContext'
import { ProgressProvider } from './context/ProgressContext'
import { ThemeProvider } from './context/ThemeContext'
import { LangProvider } from './context/LangContext'
import ProtectedRoute from './components/ProtectedRoute'
import ProtectedAdminRoute from './components/ProtectedAdminRoute'
import AppLayout from './components/AppLayout'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Curriculum from './components/Curriculum'
import ForWhom from './components/ForWhom'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Module from './pages/Module'
import Games from './pages/Games'
import Quiz from './pages/Quiz'
import Modulos from './pages/Modulos'
import Progresso from './pages/Progresso'
import Certificado from './pages/Certificado'
import Admin from './pages/Admin'
import Conquistas from './pages/Conquistas'
import Leaderboard from './pages/Leaderboard'
import Perfil from './pages/Perfil'
import Revisao from './pages/Revisao'
import Projetos from './pages/Projetos'
import Projeto from './pages/Projeto'
import Configuracoes from './pages/Configuracoes'
import Foco from './pages/Foco'
import Checkout from './pages/Checkout'

function Home() {
  const { user } = useAuth()
  if (user?.plan === 'paid' || user?.role === 'admin') {
    const last = localStorage.getItem('last_path')
    return <Navigate to={last || '/dashboard'} replace />
  }
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Curriculum />
        <Features />
        <ForWhom />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
      <AuthProvider>
        <ModulesProvider>
          <ProgressProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/modulos" element={<Modulos />} />
                <Route path="/modulo/:id" element={<Module />} />
                <Route path="/progresso" element={<Progresso />} />
                <Route path="/certificado" element={<Certificado />} />
                <Route path="/jogos" element={<Games />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/conquistas" element={<Conquistas />} />
                <Route path="/ranking" element={<Leaderboard />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/configuracoes" element={<Configuracoes />} />
                <Route path="/foco" element={<Foco />} />
                <Route path="/revisao" element={<Revisao />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/projeto/:id" element={<Projeto />} />
                <Route
                  path="/admin"
                  element={
                    <ProtectedAdminRoute>
                      <Admin />
                    </ProtectedAdminRoute>
                  }
                />
              </Route>
            </Routes>
          </ProgressProvider>
        </ModulesProvider>
      </AuthProvider>
      </LangProvider>
    </ThemeProvider>
  )
}
