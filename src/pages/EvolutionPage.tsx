import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEvolutions } from '../store/thunks/fetchEvolutions'
import { AppDispatch } from '../store'
import { EvolutionsState } from '../types'
// import { PokemonState } from '../store/slices/pokemonSlice'

const EvolutionPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { evolutionChains, loading, error } = useSelector((state: { evolutions: EvolutionsState }) => state.evolutions)

  useEffect(() => {
    // Replace `1` with actual Pokémon ID
    dispatch(fetchEvolutions(1))
  }, [dispatch])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h1>Evolution Chains</h1>
      {/* Render evolution chains data here */}
    </div>
  )
}

export default EvolutionPage
