import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from './pages/Index'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Proyectos from './pages/Proyectos'
function App() {
  return (
    
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/proyectos' element={<Proyectos/>}/>
        <Route path='/contacto' element={<h1>PAGINA CONTACTO</h1>}/>
      </Routes>
      <Footer/>
      
    </BrowserRouter>
    
    
  )
}

export default App