import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchPokemonsByAbility } from '../store/thunks/fetchPokemonsByAbility'
import { selectPokemonsByAbility, setAbilityPage } from '../store/slices/pokemonSlice'
import PokemonCard from '../components/PokemonCard'
import Pagination from '../components/Pagination'
import { AppDispatch } from '../store'

const AbilityPage: React.FC = () => {
  const { abilityName } = useParams<{ abilityName: string }>()
  const dispatch = useDispatch<AppDispatch>()
  const { pokemons, currentPage, totalPages } = useSelector(selectPokemonsByAbility)

  useEffect(() => {
    if (abilityName) {
      dispatch(fetchPokemonsByAbility({ abilityName, page: currentPage }))
    } else {
      console.error('Название способности не определено')
    }
  }, [dispatch, abilityName, currentPage])

  const handlePageChange = (newPage: number) => {
    dispatch(setAbilityPage(newPage))
  }

  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-2xl mb-4'>Pokémons with Ability: {abilityName}</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <div className='mt-6'>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  )
}

export default AbilityPage
