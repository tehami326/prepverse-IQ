import { Navigate, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProblemsPage from './pages/ProblemsPage'
import DashBoardPage from './pages/DashBoardPage'
import { useUser } from '@clerk/clerk-react'
import { Toaster } from "react-hot-toast"
import ProblemPage from './pages/ProblemPage'

function App() {
  const { isSignedIn, isLoaded } = useUser()
  if (!isLoaded) return null;
  return (
    <>
      <Routes>


        <Route path='/' element={!isSignedIn ? <HomePage /> : <Navigate to={'/dashboard'} />} />
        <Route path='/dashboard' element={isSignedIn ? <DashBoardPage /> : <Navigate to={'/'} />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/problems' element={isSignedIn ? <ProblemsPage /> : <Navigate to={'/'} />} />
        <Route path='/problem/:id' element={isSignedIn ? <ProblemPage /> : <Navigate to={'/'} />} />



      </Routes>
      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  )
}

export default App
