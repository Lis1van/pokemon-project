//   return (
//     <div>
//       <h1 className='text-3xl mb-4'>{pokemon.name}</h1>
//       <img
//         src={require(`../assets/images/sprites/pokemon/other/official-artwork/${pokemon.id}.png`)}
//         alt={pokemon.name}
//         className='w-40 h-40 mx-auto'
//       />
//       <p>ID: {pokemon.id}</p>
//       <p>Base Experience: {pokemon.base_experience}</p>
//       <div>
//         <h2 className='text-xl mt-4'>Types:</h2>
//         {pokemon.types.map(type => (
//           <p key={type.type.name}>{type.type.name}</p>
//         ))}
//       </div>
//       <div>
//         <h2 className='text-xl mt-4'>Abilities:</h2>
//         {pokemon.abilities.map(ability => (
//           <p key={ability.ability.name}>{ability.ability.name}</p>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default PokemonDetail

// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
// import { fetchPokemonById } from '../store/thunks/fetchPokemonById' // Используем созданный thunk
// import { selectPokemonById } from '../store/slices/pokemonSlice'
// import { AppDispatch } from '../store'

// const PokemonDetail: React.FC = () => {
//   const { id } = useParams<{ id: string }>()
//   const dispatch = useDispatch<AppDispatch>()
//   const pokemon = useSelector(state => selectPokemonById(state, Number(id)))

//   useEffect(() => {
//     if (id && !pokemon) {
//       dispatch(fetchPokemonById(Number(id)))
//     }
//   }, [dispatch, id, pokemon])

//   if (!pokemon) return <div>Loading...</div>

//   return (
//     <div>
//       <h1 className='text-3xl mb-4'>{pokemon.name}</h1>
//       <img
//         src={require(`../assets/images/sprites/pokemon/other/official-artwork/${pokemon.id}.png`)}
//         alt={pokemon.name}
//         className='w-40 h-40 mx-auto'
//       />
//       <p>ID: {pokemon.id}</p>
//       <p>Base Experience: {pokemon.base_experience}</p>
//       <div>
//         <h2 className='text-xl mt-4'>Types:</h2>
//         {pokemon.types.map(type => (
//           <p key={type.type.name}>{type.type.name}</p>
//         ))}
//       </div>
//       <div>
//         <h2 className='text-xl mt-4'>Abilities:</h2>
//         {pokemon.abilities.map(ability => (
//           <p key={ability.ability.name}>{ability.ability.name}</p>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default PokemonDetail

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchPokemonById } from '../store/thunks/fetchPokemonById'
import { selectPokemonById } from '../store/slices/pokemonSlice'
import { AppDispatch, RootState } from '../store'

const PokemonDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch<AppDispatch>()
  const pokemon = useSelector((state: RootState) => selectPokemonById(state, Number(id)))

  useEffect(() => {
    if (id && !pokemon) {
      dispatch(fetchPokemonById(Number(id)))
    }
  }, [dispatch, id, pokemon])

  if (!pokemon) return <div>Loading...</div>

  return (
    <div>
      <h1 className='text-3xl mb-4'>{pokemon.name}</h1>
      <img
        src={require(`/assets/images/sprites/pokemon/other/official-artwork/${pokemon.id}.png`)}
        alt={pokemon.name}
        className='w-40 h-40 mx-auto'
      />
      <p>ID: {pokemon.id}</p>
      <p>Base Experience: {pokemon.base_experience}</p>
      <div>
        <h2 className='text-xl mt-4'>Types:</h2>
        {pokemon.types.map(type => (
          <p key={type.type.name}>{type.type.name}</p>
        ))}
      </div>
      <div>
        <h2 className='text-xl mt-4'>Abilities:</h2>
        {pokemon.abilities.map(ability => (
          <p key={ability.ability.name}>{ability.ability.name}</p>
        ))}
      </div>
    </div>
  )
}

export default PokemonDetail
