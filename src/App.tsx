// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Header from './components/Header'
// import Home from './pages/Home'
// import PokemonDetails from './pages/PokemonDetail'
// import AbilityPage from './pages/AbilityPage'

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/pokemon/:id' element={<PokemonDetails />} />
//         <Route path='/ability/:id' element={<AbilityPage />} />
//       </Routes>
//     </Router>
//   )
// }

// export default App

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import PokemonDetail from './pages/PokemonDetail'
import TypePage from './pages/TypePage'
import AbilityPage from './pages/AbilityPage'
import UserPage from './pages/UserPage'
import SearchPage from './pages/SearchPage'
import SearchResults from './components/SearchResults'

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
            <Route path='/user' element={<UserPage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/search-results' element={<SearchResults />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
