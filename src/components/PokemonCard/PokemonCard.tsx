import React from 'react'
import { Link } from 'react-router-dom'
import { Pokemon } from '../../types'

interface PokemonCardProps {
  pokemon: Pokemon
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className='bg-gray-800 text-white p-4 rounded-md'>
      <Link to={`/pokemon/${pokemon.id}`}>
        <img
          src={require(`../../assets/images/sprites/pokemon/other/official-artwork/${pokemon.id}.png`)}
          alt={pokemon.name}
          className='w-20 h-20 mx-auto'
        />
        <h2 className='text-center mt-2'>{pokemon.name}</h2>
        <p className='text-center'>ID: {pokemon.id}</p>
        <div className='mt-2'>
          <span className='font-semibold'>Types:</span>
          {pokemon.types.map(type => (
            <Link key={type.type.name} to={`/type/${type.type.name}`} className='text-blue-500 ml-2'>
              {type.type.name}
            </Link>
          ))}
        </div>
        <div className='mt-2'>
          <span className='font-semibold'>Abilities:</span>
          {pokemon.abilities.map(ability => (
            <Link key={ability.ability.name} to={`/ability/${ability.ability.name}`} className='text-blue-500 ml-2'>
              {ability.ability.name}
            </Link>
          ))}
        </div>
      </Link>
    </div>
  )
}

export default PokemonCard
