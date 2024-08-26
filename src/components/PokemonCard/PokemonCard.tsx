// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Pokemon } from '../../types'

// interface PokemonCardProps {
//   pokemon: Pokemon
// }

// const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
//   console.log('Pokemon in Card:', pokemon)
//   return (
//     <div className='bg-gray-800 text-white p-4 rounded-md'>
//       <Link to={`/pokemon/${pokemon.id}`}>
//         <img
//           src={`/assets/images/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
//           alt={pokemon.name}
//           className='w-20 h-20 mx-auto'
//         />
//         <h2 className='text-center mt-2'>{pokemon.name}</h2>
//         <p className='text-center'>ID: {pokemon.id}</p>
//         {/* <div className='mt-2'>
//           <span className='font-semibold'>Types:</span>
//           {pokemon.types.map(type => (
//             <Link key={type.type.name} to={`/type/${type.type.name}`} className='text-blue-500 ml-2'>
//               {type.type.name}
//             </Link>
//           ))}
//         </div> */}
//         <div className='mt-2'>
//           <span className='font-semibold'>Types:</span>
//           {pokemon.types &&
//             pokemon.types.map(type => (
//               <Link key={type.type.name} to={`/type/${type.type.name}`} className='text-blue-500 ml-2'>
//                 {type.type.name}
//               </Link>
//             ))}
//         </div>

//         <div className='mt-2'>
//           <span className='font-semibold'>Abilities:</span>
//           {pokemon.abilities.map(ability => (
//             <Link key={ability.ability.name} to={`/ability/${ability.ability.name}`} className='text-blue-500 ml-2'>
//               {ability.ability.name}
//             </Link>
//           ))}
//         </div>
//       </Link>
//     </div>
//   )
// }

// export default PokemonCard

// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Pokemon } from '../../types'

// interface PokemonCardProps {
//   pokemon: Pokemon
// }

// const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
//   // Проверка наличия данных о покемоне
//   if (!pokemon || !pokemon.id || !pokemon.name) {
//     console.error('Invalid pokemon data:', pokemon)
//     return null
//   }

//   console.log('Rendering PokemonCard for:', pokemon.name)

//   return (
//     <div className='p-4 rounded-lg shadow-lg bg-white'>
//       {/* Обертка Link */}
//       <Link to={`/pokemon/${pokemon.id}`}>
//         <div className='text-center'>
//           {/* Проверка пути к изображению */}
//           {pokemon.id && (
//             <img
//               src={`/assets/images/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
//               alt={pokemon.name}
//               className='w-20 h-20 mx-auto'
//               onError={e => {
//                 e.currentTarget.src = '/assets/images/placeholder.png' // Запасное изображение при ошибке загрузки
//                 console.error('Image load error for pokemon:', pokemon.name)
//               }}
//             />
//           )}
//           <h2 className='text-center mt-2'>{pokemon.name}</h2>
//         </div>
//       </Link>

//       {/* Проверка типов покемона */}
//       <div className='mt-2'>
//         <span className='font-semibold'>Types:</span>
//         {pokemon.types && pokemon.types.length > 0 ? (
//           pokemon.types.map(type => (
//             <Link key={type.type.name} to={`/type/${type.type.name}`} className='text-blue-500 ml-2'>
//               {type.type.name}
//             </Link>
//           ))
//         ) : (
//           <span className='ml-2'>Unknown</span>
//         )}
//       </div>
//     </div>
//   )
// }

// export default PokemonCard

// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Pokemon } from '../../types'

// interface PokemonCardProps {
//   pokemon: Pokemon
// }

// const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
//   // Проверка наличия данных о покемоне
//   if (!pokemon || !pokemon.id || !pokemon.name) {
//     console.error('Invalid pokemon data:', pokemon)
//     return null
//   }

//   console.log('Rendering PokemonCard for:', pokemon.name)

//   return (
//     <div className='p-4 rounded-lg shadow-lg bg-white'>
//       <Link to={`/pokemon/${pokemon.id}`}>
//         <div className='text-center'>
//           {/* Проверка пути к изображению */}
//           {pokemon.id && (
//             <img
//               src={`/assets/images/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
//               alt={pokemon.name}
//               className='w-20 h-20 mx-auto'
//               onError={e => {
//                 e.currentTarget.src = '/assets/images/placeholder.png' // Запасное изображение при ошибке загрузки
//                 console.error('Image load error for pokemon:', pokemon.name)
//               }}
//             />
//           )}
//           <h2 className='text-center mt-2'>{pokemon.name}</h2>
//         </div>
//       </Link>

//       {/* Проверка типов покемона */}
//       <div className='mt-2'>
//         <span className='font-semibold'>Types:</span>
//         {pokemon.types && pokemon.types.length > 0 ? (
//           pokemon.types.map(type => (
//             <Link key={type.type.name} to={`/type/${type.type.name}`} className='text-blue-500 ml-2'>
//               {type.type.name}
//             </Link>
//           ))
//         ) : (
//           <span className='ml-2'>Unknown</span>
//         )}
//       </div>
//     </div>
//   )
// }

// export default PokemonCard

import React from 'react'
import { Link } from 'react-router-dom'
import { Pokemon } from '../../types'

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
    <div className='p-4 rounded-lg shadow-lg bg-white'>
      <Link to={`/pokemon/${pokemon.id}`}>
        <div className='text-center'>
          {pokemon.id && (
            <img
              src={`../../assets/images/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              alt={pokemon.name}
              className='w-20 h-20 mx-auto'
              onError={e => {
                e.currentTarget.src = '/assets/images/placeholder.png' // Запасное изображение при ошибке загрузки
                console.error('Image load error for pokemon:', pokemon.name)
              }}
            />
          )}
          <h2 className='text-center mt-2'>{pokemon.name}</h2>
        </div>
      </Link>

      <div className='mt-2'>
        <span className='font-semibold'>Types:</span>
        {pokemon.types && pokemon.types.length > 0 ? (
          pokemon.types.map(type => (
            <Link key={type.type.name} to={`/type/${type.type.name}`} className='text-blue-500 ml-2'>
              {type.type.name}
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
