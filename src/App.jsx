import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import { ModulesProvider } from './context/ModulesContext'
import { ProgressProvider } from './context/ProgressContext'
import { MissoesProvider } from './context/MissoesContext'
import { ThemeProvider } from './context/ThemeContext'
import { LangProvider } from './context/LangContext'
import ProtectedRoute from './components/ProtectedRoute'
import ProtectedAdminRoute from './components/ProtectedAdminRoute'
import AppLayout from './components/AppLayout'
import Navbar from './components/Navbar'
import WhatsappFab from './components/WhatsappFab'
import Hero from './components/Hero'

// Landing — abaixo do fold, lazy
const About        = lazy(() => import('./components/About'))
const Curriculum   = lazy(() => import('./components/Curriculum'))
const ForWhom      = lazy(() => import('./components/ForWhom'))
const Features     = lazy(() => import('./components/Features'))
const AppPreview   = lazy(() => import('./components/AppPreview'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const CallToAction = lazy(() => import('./components/CallToAction'))
const Footer       = lazy(() => import('./components/Footer'))

// Páginas — todas lazy
const Login        = lazy(() => import('./pages/Login'))
const Checkout     = lazy(() => import('./pages/Checkout'))
const TermosDeUso    = lazy(() => import('./pages/TermosDeUso'))
const Privacidade    = lazy(() => import('./pages/Privacidade'))
const ResetPassword  = lazy(() => import('./pages/ResetPassword'))
const Dashboard    = lazy(() => import('./pages/Dashboard'))
const Module       = lazy(() => import('./pages/Module'))
const Games        = lazy(() => import('./pages/Games'))
const Quiz         = lazy(() => import('./pages/Quiz'))
const Modulos      = lazy(() => import('./pages/Modulos'))
const Progresso    = lazy(() => import('./pages/Progresso'))
const Certificado  = lazy(() => import('./pages/Certificado'))
const Admin        = lazy(() => import('./pages/Admin'))
const Conquistas   = lazy(() => import('./pages/Conquistas'))
const Leaderboard  = lazy(() => import('./pages/Leaderboard'))
const Perfil       = lazy(() => import('./pages/Perfil'))
const Revisao      = lazy(() => import('./pages/Revisao'))
const Projetos     = lazy(() => import('./pages/Projetos'))
const Projeto      = lazy(() => import('./pages/Projeto'))
const Configuracoes = lazy(() => import('./pages/Configuracoes'))
const Foco         = lazy(() => import('./pages/Foco'))

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
        <Suspense fallback={null}>
          <About />
          <Curriculum />
          <Features />
          <AppPreview />
          <ForWhom />
          <Testimonials />
          <CallToAction />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <WhatsappFab />
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
            <MissoesProvider>
            <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/termos" element={<TermosDeUso />} />
              <Route path="/privacidade" element={<Privacidade />} />
              <Route path="/reset-password" element={<ResetPassword />} />
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
            </Suspense>
            </MissoesProvider>
          </ProgressProvider>
        </ModulesProvider>
      </AuthProvider>
      </LangProvider>
    </ThemeProvider>
  )
}
