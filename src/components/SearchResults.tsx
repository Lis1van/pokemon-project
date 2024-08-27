// // src/components/SearchResults.tsx
// import React from 'react'
// import { useSelector } from 'react-redux'
// import { RootState } from '../store'
// import PokemonCard from './PokemonCard'
// import { Pokemon } from '../types' // Импортируем тип Pokemon

// const SearchResults: React.FC = () => {
//   const { searchResults, loading, error } = useSelector((state: RootState) => state.pokemon)

//   if (loading) return <div>Загрузка...</div>
//   if (error) return <div>Ошибка: {error}</div>
//   if (searchResults.length === 0) return <div>Ничего не найдено</div>

//   return (
//     <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4'>
//       {searchResults.map((pokemon: Pokemon) => (
//         <PokemonCard key={pokemon.id} pokemon={pokemon} />
//       ))}
//     </div>
//   )
// }

// export default SearchResults

import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './PokemonCard'
import Pagination from './Pagination'
import { RootState } from '../store'

const ITEMS_PER_PAGE = 20

const SearchResults: React.FC = () => {
  const { searchResults, loading, error } = useSelector((state: RootState) => state.pokemon)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setCurrentPage(1)
  }, [searchResults])

  if (loading) return <div>Загрузка...</div>
  if (error) return <div>Ошибка: {error}</div>
  if (searchResults.length === 0) return <div>Ничего не найдено</div>

  const totalPages = Math.ceil(searchResults.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentPokemons = searchResults.slice(startIndex, endIndex)

  return (
    <div>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4'>
        {currentPokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  )
}

export default SearchResults
