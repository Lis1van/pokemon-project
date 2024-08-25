import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Home from './Home'
import PokemonDetail from './PokemonDetail'
import TypePage from './TypePage'
import AbilityPage from './AbilityPage'

const App: React.FC = () => {
  return (
    <Router>
      <div className='min-h-screen bg-gray-900 text-white'>
        <Header />
        <main className='container mx-auto p-4'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokemon/:id' element={<PokemonDetail />} />
            <Route path='/type/:typeName' element={<TypePage />} />
            <Route path='/ability/:abilityName' element={<AbilityPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
