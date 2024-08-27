import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../store'
import { fetchPokemonForm } from '../store/thunks/fetchPokemonForm'
import { selectPokemonForm } from '../store/slices/pokemonFormSlice'
import { RootState } from '../store'

interface Stat {
  base_stat: number
  stat: {
    name: string
  }
}

interface Ability {
  ability: {
    name: string
  }
}

interface Type {
  type: {
    name: string
  }
}

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
  psychic: '/assets/images/sprites/types/generation-viii/sword-shield/14.png',
  poison: '/assets/images/sprites/types/generation-viii/sword-shield/4.png',
  rock: '/assets/images/sprites/types/generation-viii/sword-shield/6.png',
  steel: '/assets/images/sprites/types/generation-viii/sword-shield/9.png',
  water: '/assets/images/sprites/types/generation-viii/sword-shield/11.png',
}

const FormsPage: React.FC = () => {
  const { formId } = useParams<{ formId: string }>()
  const dispatch = useDispatch<AppDispatch>()
  const form = useSelector((state: RootState) => selectPokemonForm(state))

  useEffect(() => {
    if (formId) {
      console.log('Fetching form for ID:', formId)
      dispatch(fetchPokemonForm(Number(formId)))
    }
  }, [dispatch, formId])

  useEffect(() => {
    console.log('Fetched form data:', form)
  }, [form])

  if (!form) return <div>Loading...</div>

  const stats: Stat[] = form.stats || []
  const abilities: Ability[] = form.abilities || []
  const types: Type[] = form.types || []

  return (
    <div className='container mx-auto p-6'>
      <div className='bg-white shadow-lg rounded-lg p-6'>
        <div className='flex flex-col items-center'>
          <h2 className='text-xl font-bold mt-2 capitalize'>{form.name}</h2>
          <img
            src={`/assets/images/sprites/pokemon/other/official-artwork/${form.id}.png`}
            alt={form.name}
            className='w-52 h-52'
            onError={e => {
              ;(e.target as HTMLImageElement).src = form.sprites.front_default
            }}
          />

          <div className='bg-gray-200 rounded-lg p-4 mt-4 w-full max-w-md text-black'>
            <div className='text-center'>
              <strong className='text-2xl'>#{form.id}</strong>
              <p className='text-lg'>Height: {form.height * 10} cm</p>
              <p className='text-lg'>Weight: {form.weight / 10} kg</p>
            </div>

            <div className='mt-4'>
              <h3 className='text-lg font-semibold'>Types</h3>
              <div className='flex flex-wrap'>
                {types.map(type => (
                  <div key={type.type.name} className='m-2'>
                    <img src={typeImages[type.type.name]} alt={type.type.name} className='w-20 h-10' />
                    <span className='capitalize'>{type.type.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className='mt-4'>
              <h3 className='text-lg font-semibold'>Base Stats</h3>
              <div className='space-y-2'>
                {stats.map(stat => (
                  <div key={stat.stat.name} className='flex items-center'>
                    <span className='w-1/4 font-semibold capitalize'>{stat.stat.name}:</span>
                    <progress className='w-3/4' value={stat.base_stat} max={200}></progress>
                    <span className='ml-2'>{stat.base_stat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className='mt-4'>
              <h3 className='text-lg font-semibold'>Abilities</h3>
              <div className='flex flex-wrap gap-2'>
                {abilities.map(ability => (
                  <span
                    key={ability.ability.name}
                    className='inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-300 rounded-full shadow-md'>
                    {ability.ability.name}
                  </span>
                ))}
              </div>
            </div>

            <div className='mt-4'>
              <h3 className='text-lg font-semibold'>Details</h3>
              <ul>
                <li>
                  <strong>Base Experience:</strong> {form.base_experience}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormsPage
