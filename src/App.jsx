import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './style.scss'
import {Container} from '@mui/material'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'

function App() {

  return (
    <Router>
      <Navbar/>
     <Container sx={{mt:4}}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
     </Container>
    </Router>
  )
}

export default App
