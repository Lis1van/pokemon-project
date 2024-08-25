// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchPokemons } from '../features/pokemon/thunks/fetchPokemons'
// import { selectAllPokemons } from '../features/pokemon/selectors'
// import PokemonCard from '../components/PokemonCard'
// import Pagination from '../components/Pagination'

// const Home: React.FC = () => {
//   const dispatch = useDispatch()
//   const { pokemons, currentPage, totalPages } = useSelector(selectAllPokemons)

//   useEffect(() => {
//     dispatch(fetchPokemons(currentPage))
//   }, [dispatch, currentPage])

//   return (
//     <div>
//       <h1 className='text-2xl mb-4'>Pokémon List</h1>
//       <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
//         {pokemons.map(pokemon => (
//           <PokemonCard key={pokemon.id} pokemon={pokemon} />
//         ))}
//       </div>
//       <Pagination currentPage={currentPage} totalPages={totalPages} />
//     </div>
//   )
// }

// export default Home

// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchPokemons } from '../store/thunks/fetchPokemons'
// import { selectAllPokemons } from '../features/pokemon/selectors'
// import PokemonCard from '../components/PokemonCard'
// import Pagination from '../components/Pagination'
// import SearchInput from '../components/Search'
// import { AppDispatch } from '../store'

// const Home: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>()
//   const { pokemons, currentPage, totalPages } = useSelector(selectAllPokemons)
//   const [page, setPage] = React.useState(1)

//   useEffect(() => {
//     dispatch(fetchPokemons(currentPage))
//   }, [dispatch, currentPage])

//   return (
//     <div>
//       <SearchInput />
//       <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4'>
//         {pokemons.map(pokemon => (
//           <PokemonCard key={pokemon.id} pokemon={pokemon} />
//         ))}
//       </div>
//       <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />
//     </div>
//   )
// }

// export default Home

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemons } from '../store/thunks/fetchPokemons'
import { selectAllPokemons } from '../store/slices/pokemonSlice' // Обновленный путь импорта селектора
import PokemonCard from '../components/PokemonCard'
import Pagination from '../components/Pagination'
import SearchInput from '../components/Search'
import { AppDispatch } from '../store'

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { pokemons, currentPage, totalPages } = useSelector(selectAllPokemons)
  const [page, setPage] = useState(currentPage)

  useEffect(() => {
    dispatch(fetchPokemons(page))
  }, [dispatch, page])

  return (
    <div>
      <SearchInput />
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4'>
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />
    </div>
  )
}

export default Home
