import { useState } from 'react'
import './App.css'
import Navegation from './components/navbar/Navegation'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Personajes from './components/Personajes/Personajes';
import InfoPersonaje from './components/InfoPersonaje/InfoPersonaje';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navegation></Navegation>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/personajes' element={<Personajes/>}/>
      <Route path='/infoPersonajes/:name' element={<InfoPersonaje/>}/>      
    </Routes>
    </>
  )
}

export default App
