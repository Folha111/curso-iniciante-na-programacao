import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ModulesProvider } from './context/ModulesContext'
import { ProgressProvider } from './context/ProgressContext'
import { ThemeProvider } from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import ProtectedAdminRoute from './components/ProtectedAdminRoute'
import AppLayout from './components/AppLayout'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Curriculum from './components/Curriculum'
import ForWhom from './components/ForWhom'
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

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Curriculum />
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
      <AuthProvider>
        <ModulesProvider>
          <ProgressProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
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
    </ThemeProvider>
  )
}
