// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
// import { fetchPokemonsByAbility } from '../store/thunks/fetchPokemonsByAbility'
// import { selectPokemonsByAbility } from '../features/pokemon/selectors'
// import PokemonCard from '../components/PokemonCard'
// import Pagination from '../components/Pagination'

// const AbilityPage: React.FC = () => {
//   const { abilityName } = useParams()
//   const dispatch = useDispatch()
//   const { pokemons, currentPage, totalPages } = useSelector(selectPokemonsByAbility)

//   useEffect(() => {
//     if (abilityName) {
//       dispatch(fetchPokemonsByAbility(abilityName, currentPage))
//     }
//   }, [dispatch, abilityName, currentPage])

//   return (
//     <div>
//       <h1 className='text-2xl mb-4'>Pokémons with Ability: {abilityName}</h1>
//       <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
//         {pokemons.map(pokemon => (
//           <PokemonCard key={pokemon.id} pokemon={pokemon} />
//         ))}
//       </div>
//       <Pagination currentPage={currentPage} totalPages={totalPages} />
//     </div>
//   )
// }

// export default AbilityPage

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchPokemonsByAbility } from '../store/thunks/fetchPokemonsByAbility'
import { selectPokemonsByAbility } from '../store/slices/pokemonSlice'
import PokemonCard from '../components/PokemonCard'
import Pagination from '../components/Pagination'
import { AppDispatch } from '../store'

const AbilityPage: React.FC = () => {
  const { abilityName } = useParams<{ abilityName: string }>()
  const dispatch = useDispatch<AppDispatch>()
  const { pokemons, currentPage, totalPages } = useSelector(selectPokemonsByAbility)
  const [page, setPage] = useState(currentPage)

  useEffect(() => {
    if (abilityName) {
      dispatch(fetchPokemonsByAbility({ abilityName, page: currentPage }))
    }
  }, [dispatch, abilityName, currentPage])

  return (
    <div>
      <h1 className='text-2xl mb-4'>Pokémons with Ability: {abilityName}</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />
    </div>
  )
}

export default AbilityPage
