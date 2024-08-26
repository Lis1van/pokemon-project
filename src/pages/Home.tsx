// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchPokemons } from '../store/thunks/fetchPokemons'
// import { selectAllPokemons } from '../store/slices/pokemonSlice' // Обновленный путь импорта селектора
// import PokemonCard from '../components/PokemonCard'
// import Pagination from '../components/Pagination'
// import SearchInput from '../components/Search'
// import { AppDispatch } from '../store'

// const Home: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>()
//   const { pokemons, currentPage, totalPages } = useSelector(selectAllPokemons)
//   const [page, setPage] = useState(currentPage)

//   useEffect(() => {
//     dispatch(fetchPokemons(page))
//   }, [dispatch, page])

//   return (
//     <div>
//       <SearchInput />
//       console.log(pokemons);
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

// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchPokemons } from '../store/thunks/fetchPokemons'
// // import { PokemonState } from '../store/slices/pokemonSlice'
// import PokemonCard from '../components/PokemonCard'
// import Pagination from '../components/Pagination'
// import SearchInput from '../components/Search'
// import { AppDispatch } from '../store'
// import { PokemonState } from '../types'

// const Home: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>()
//   const { pokemons, currentPage, totalPages } = useSelector((state: { pokemon: PokemonState }) => state.pokemon)
//   const [page, setPage] = useState(currentPage)
//   // console.log('Pokemons:', pokemons)

//   useEffect(() => {
//     dispatch(fetchPokemons(page))
//   }, [dispatch, page])

//   return (
//     <div>
//       <SearchInput />
//       {/* {pokemons.length === 0 ? (
//         <div>Загрузка покемонов...</div>
//       ) : (
//         <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4'>
//           {pokemons.map(pokemon => (
//             <PokemonCard key={pokemon.id} pokemon={pokemon} />
//           ))}
//         </div>
//       )} */}
//       {pokemons.length > 0 &&
//         pokemons.map(pokemon => {
//           if (!pokemon.id) {
//             console.error('Missing ID for pokemon:', pokemon)
//             return null
//           }
//           return <PokemonCard key={pokemon.id} pokemon={pokemon} />
//         })}

//       <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />
//     </div>
//   )
// }

// export default Home

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemons } from '../store/thunks/fetchPokemons'
import PokemonCard from '../components/PokemonCard'
import Pagination from '../components/Pagination'
import SearchInput from '../components/Search'
import { AppDispatch } from '../store'
import { PokemonState } from '../types'

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { pokemons, currentPage, totalPages } = useSelector((state: { pokemon: PokemonState }) => state.pokemon)
  const [page, setPage] = useState(currentPage)

  // Логирование состояния покемонов и текущей страницы
  console.log('Current page:', page)
  console.log('Pokemons state:', pokemons)

  useEffect(() => {
    console.log('Dispatching fetchPokemons with page:', page)
    dispatch(fetchPokemons(page))
  }, [dispatch, page])

  return (
    <div>
      <SearchInput />
      {pokemons.length > 0 ? (
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4'>
          {pokemons.map(pokemon => {
            if (!pokemon.id) {
              console.error('Missing ID for pokemon:', pokemon)
              return null
            }
            return <PokemonCard key={pokemon.id} pokemon={pokemon} />
          })}
        </div>
      ) : (
        <div>Загрузка покемонов...</div>
      )}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />
    </div>
  )
}

export default Home
