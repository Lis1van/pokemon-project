import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import PokemonDetails from './pages/PokemonDetail'

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon/:id' element={<PokemonDetails />} />
      </Routes>
    </Router>
  )
}

export default App
