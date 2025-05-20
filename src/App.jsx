import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './style.scss'
import {Container} from '@mui/material'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import { useState } from 'react'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <Router>
      <Navbar/>
     <Container sx={{mt:4}}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>

        <Route 
        path='/projects' 
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Projects/>
          </ProtectedRoute>
        }
        />
        <Route path='/login' element={<Login onLogin={()=>setIsAuthenticated(true)}/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
     </Container>
    </Router>
  )
}

export default App
