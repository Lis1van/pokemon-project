import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { fetchPokemonById } from '../store/thunks/fetchPokemonById'
import { selectPokemonById } from '../store/slices/pokemonSlice'
import { AppDispatch, RootState } from '../store'
import { fetchEvolutions } from '../store/thunks/fetchEvolutions'
import EvolutionPage from './EvolutionPage'

const typeImages: Record<string, string> = {
  bug: '/assets/images/sprites/types/generation-viii/sword-shield/7.png',
  dark: '/assets/images/sprites/types/generation-viii/sword-shield/17.png',
  dragon: '/assets/images/sprites/types/generation-viii/sword-shield/16.png',
  electric: '/assets/images/sprites/types/generation-viii/sword-shield/13.png',
  fairy: '/assets/images/sprites/types/fairy.png',
  fighting: '/assets/images/sprites/types/generation-viii/sword-shield/2.png',
  fire: '/assets/images/sprites/types/generation-viii/sword-shield/10.png',
  flying: '/assets/images/sprites/types/generation-viii/sword-shield/3.png',
  ghost: '/assets/images/sprites/types/generation-viii/sword-shield/8.png',
  grass: '/assets/images/sprites/types/generation-viii/sword-shield/12.png',
  ground: '/assets/images/sprites/types/generation-viii/sword-shield/5.png',
  ice: '/assets/images/sprites/types/generation-viii/sword-shield/15.png',
  normal: '/assets/images/sprites/types/generation-viii/sword-shield/1.png',
  psychic: '/assets/images/sprites/types/generation-viii/sword-shield/14.png', // Исправлено с "physic" на "psychic"
  poison: '/assets/images/sprites/types/generation-viii/sword-shield/4.png',
  rock: '/assets/images/sprites/types/generation-viii/sword-shield6.png',
  steel: '/assets/images/sprites/types/generation-viii/sword-shield/9.png',
  water: '/assets/images/sprites/types/generation-viii/sword-shield/11.png',
}

const PokemonDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch<AppDispatch>()
  const pokemon = useSelector((state: RootState) => selectPokemonById(state, Number(id)))
  const navigate = useNavigate()

  useEffect(() => {
    if (id && !pokemon) {
      dispatch(fetchPokemonById(Number(id)))
    }
    if (id) {
      dispatch(fetchEvolutions(Number(id)))
    }
    if (pokemon && pokemon.forms) {
      pokemon.forms.forEach(form => {
        if (!form.url) {
          console.error('Form URL is undefined or invalid', form)
        }
      })
    }
  }, [dispatch, id, pokemon])

  if (!pokemon) return <div>Loading...</div>

  return (
    <div className='container mx-auto p-6'>
      <div className='bg-white shadow-lg rounded-lg p-6'>
        <div className='flex flex-col items-center'>
          <img
            src={`/assets/images/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            alt={pokemon.name}
            className='w-52 h-52'
          />
          <div className='bg-gray-200 rounded-lg p-4 mt-4 w-full max-w-md text-black'>
            <div className='text-center'>
              <strong className='text-2xl'>#{pokemon.id}</strong>
              <h2 className='text-xl font-bold mt-2'>{pokemon.name}</h2>
              <p className='text-lg'>Height: {pokemon.height * 10} cm</p>
              <p className='text-lg'>Weight: {pokemon.weight / 10} kg</p>
            </div>
            <div className='mt-4'>
              <h3 className='text-lg font-semibold'>Types:</h3>
              <div className='flex flex-wrap'>
                {pokemon.types.map(type => (
                  <Link key={type.type.name} to={`/type/${type.type.name}`} className='inline-block mr-2 mb-2'>
                    <img
                      src={typeImages[type.type.name] || '/assets/images/types/default.png'}
                      alt={type.type.name}
                      className='w-25 h-10'
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className='mt-4'>
              <h3 className='text-lg font-semibold mb-2'>Abilities:</h3>
              <div className='flex flex-wrap gap-2'>
                {pokemon.abilities.map(ability => (
                  <span
                    key={ability.ability.name}
                    className='inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition duration-300 cursor-pointer'
                    onClick={() => navigate(`/ability/${ability.ability.name}`)}>
                    {ability.ability.name}
                  </span>
                ))}
              </div>
            </div>
            <div className='mt-4'>
              <h3 className='text-lg font-semibold'>Stats:</h3>
              <div className='space-y-2'>
                {pokemon.stats.map(stat => (
                  <div key={stat.stat.name} className='flex items-center'>
                    <span className='w-1/4 font-semibold'>{stat.stat.name}:</span>
                    <progress className='w-3/4' value={stat.base_stat} max={200}></progress>
                    <span className='ml-2'>{stat.base_stat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className='mt-4'>
              <h3 className='text-lg font-semibold mb-2'>Forms:</h3>
              <div className='flex flex-wrap gap-2'>
                {pokemon.forms.map(form => (
                  <button
                    key={form.name}
                    onClick={() => {
                      if (form.url) {
                        try {
                          const formId = form.url.split('/').slice(-2, -1)[0]
                          navigate(`/pokemon/${formId}`)
                        } catch (error) {
                          console.error('Error parsing form URL:', error)
                        }
                      } else {
                        console.error('Form URL is undefined or invalid', form)
                      }
                    }}
                    className='inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition duration-300'>
                    {form.name}
                  </button>
                ))}
              </div>
            </div>

            <div className='mt-4'>
              <EvolutionPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetail
