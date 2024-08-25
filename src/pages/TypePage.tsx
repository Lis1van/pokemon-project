// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
// import { fetchPokemonsByType } from '../features/pokemon/thunks/fetchPokemonsByType'
// import { selectPokemonsByType } from '../features/pokemon/selectors'
// import PokemonCard from '../components/PokemonCard'
// import Pagination from '../components/Pagination'

// const TypePage: React.FC = () => {
//   const { typeName } = useParams()
//   const dispatch = useDispatch()
//   const { pokemons, currentPage, totalPages } = useSelector(selectPokemonsByType)

//   useEffect(() => {
//     if (typeName) {
//       dispatch(fetchPokemonsByType(typeName, currentPage))
//     }
//   }, [dispatch, typeName, currentPage])

//   return (
//     <div>
//       <h1 className='text-2xl mb-4'>Pokémons of Type: {typeName}</h1>
//       <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
//         {pokemons.map(pokemon => (
//           <PokemonCard key={pokemon.id} pokemon={pokemon} />
//         ))}
//       </div>
//       <Pagination currentPage={currentPage} totalPages={totalPages} />
//     </div>
//   )
// }

// export default TypePage

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectPokemonsByType, selectTotalPages } from '../store/slices/pokemonSlice'
import PokemonCard from '../components/PokemonCard'
import Pagination from '../components/Pagination'
import { fetchPokemonsByType } from '../store/thunks/fetchPokemonsByType'
import { AppDispatch } from '../store'

const TypePage: React.FC = () => {
  const { type } = useParams<{ type: string }>()
  const dispatch = useDispatch<AppDispatch>()
  const pokemons = useSelector(selectPokemonsByType)
  const totalPages = useSelector(selectTotalPages)
  const [page, setPage] = React.useState(1)

  useEffect(() => {
    if (type) {
      dispatch(fetchPokemonsByType({ type, page }))
    }
  }, [dispatch, type, page])

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Pokemons of Type: {type}</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  )
}

export default TypePage
