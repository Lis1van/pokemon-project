import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchPokemonsByAbility } from '../features/pokemon/thunks/fetchPokemonsByAbility'
import { selectPokemonsByAbility } from '../features/pokemon/selectors'
import PokemonCard from '../components/PokemonCard'
import Pagination from '../components/Pagination'

const AbilityPage: React.FC = () => {
  const { abilityName } = useParams()
  const dispatch = useDispatch()
  const { pokemons, currentPage, totalPages } = useSelector(selectPokemonsByAbility)

  useEffect(() => {
    if (abilityName) {
      dispatch(fetchPokemonsByAbility(abilityName, currentPage))
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
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  )
}

export default AbilityPage
