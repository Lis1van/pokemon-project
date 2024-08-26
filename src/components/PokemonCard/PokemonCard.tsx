import React from 'react'
import { Link } from 'react-router-dom'
import { Pokemon } from '../../types'

// Путь к изображениям типов
const typeImages: Record<string, string> = {
  bug: '/assets/images/sprites/types/generation-iii/emerald/7.png',
  dark: '/assets/images/sprites/types/generation-iii/emerald/17.png',
  dragon: '/assets/images/sprites/types/generation-iii/emerald/16.png',
  electric: '/assets/images/sprites/types/generation-iii/emerald/13.png',
  fairy: '/assets/images/sprites/types/fairy.png',
  fighting: '/assets/images/sprites/types/generation-iii/emerald/2.png',
  fire: '/assets/images/sprites/types/generation-iii/emerald/10.png',
  flying: '/assets/images/sprites/types/generation-iii/emerald/3.png',
  ghost: '/assets/images/sprites/types/generation-iii/emerald/8.png',
  grass: '/assets/images/sprites/types/generation-iii/emerald/12.png',
  ground: '/assets/images/sprites/types/generation-iii/emerald/5.png',
  ice: '/assets/images/sprites/types/generation-iii/emerald/15.png',
  normal: '/assets/images/sprites/types/generation-iii/emerald/1.png',
  psychic: '/assets/images/sprites/types/generation-iii/emerald/14.png', // Исправлено с "physic" на "psychic"
  poison: '/assets/images/sprites/types/generation-iii/emerald/4.png',
  rock: '/assets/images/sprites/types/generation-iii/emerald/6.png',
  steel: '/assets/images/sprites/types/generation-iii/emerald/9.png',
  water: '/assets/images/sprites/types/generation-iii/emerald/11.png',
}

interface PokemonCardProps {
  pokemon: Pokemon
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  // Проверка наличия данных о покемоне
  console.log('Pokemon data:', pokemon)

  if (!pokemon || !pokemon.id || !pokemon.name) {
    console.error('Invalid pokemon data:', pokemon)
    return null
  }

  console.log('Rendering PokemonCard for:', pokemon.name)

  return (
    <div className='p-4 rounded-lg shadow-lg bg-white text-black'>
      <Link to={`/pokemon/${pokemon.id}`}>
        <div className='text-center'>
          {pokemon.id && (
            <img
              src={`/assets/images/sprites/pokemon/other/showdown/shiny/${pokemon.id}.gif`}
              alt={pokemon.name}
              className='w-20 h-20 mx-auto'
              onError={e => {
                e.currentTarget.src = '/assets/images/placeholder.png' // Запасное изображение при ошибке загрузки
                console.error('Image load error for pokemon:', pokemon.name)
              }}
            />
          )}
          <h2 className='text-center mt-2'>{pokemon.name}</h2>
          <p className='text-center text-gray-600'>ID: {pokemon.id}</p>
        </div>
      </Link>

      <div className='mt-2'>
        <span className='font-semibold'>Types:</span>
        {pokemon.types && pokemon.types.length > 0 ? (
          pokemon.types.map(type => (
            <Link key={type.type.name} to={`/type/${type.type.name}`} className='inline-block ml-2'>
              <img
                src={typeImages[type.type.name] || '/assets/images/types/default.png'} // Запасное изображение при отсутствии изображения типа
                alt={type.type.name}
                className='w-8 h-6'
              />
            </Link>
          ))
        ) : (
          <span className='ml-2'>Unknown</span>
        )}
      </div>
    </div>
  )
}

export default PokemonCard
