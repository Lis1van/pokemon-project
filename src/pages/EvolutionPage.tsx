import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEvolutions } from '../store/thunks/fetchEvolutions'
import { AppDispatch } from '../store'
import { EvolutionsState } from '../types'
import { Link, useParams } from 'react-router-dom'

const EvolutionPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { evolutionChains, loading, error } = useSelector((state: { evolutions: EvolutionsState }) => state.evolutions)

  const { id } = useParams<{ id: string }>()
  const pokemonId = id ? parseInt(id) : null

  useEffect(() => {
    if (pokemonId !== null) {
      dispatch(fetchEvolutions(pokemonId))
    }
  }, [pokemonId, dispatch])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  const renderEvolutions = (evolves_to: any[]): JSX.Element[] => {
    return evolves_to.map(evolve => (
      <div
        key={evolve.species.name}
        className='flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md'>
        <Link to={`/pokemon/${evolve.species.url.split('/')[6]}`} className='w-full text-center'>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              evolve.species.url.split('/')[6]
            }.png`}
            alt={evolve.species.name}
            className='w-24 h-24 mx-auto'
          />
          <p className='mt-2 text-lg font-medium'>{evolve.species.name}</p>
        </Link>
        {evolve.evolves_to.length > 0 && (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
            {renderEvolutions(evolve.evolves_to)}
          </div>
        )}
      </div>
    ))
  }

  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Evolution Chains</h1>
      {evolutionChains.map(chain => (
        <div key={chain.id} className='evolution-chain mb-8'>
          <h2 className='text-xl font-bold mb-4'>{chain.chain.species.name}</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {renderEvolutions(chain.chain.evolves_to)}
          </div>
        </div>
      ))}
    </div>
  )
}

export default EvolutionPage
