// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Search: React.FC = () => {
//   const [query, setQuery] = useState('')
//   const navigate = useNavigate()

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault()
//     navigate(`/search/${query}`)
//   }

//   return (
//     <form onSubmit={handleSearch} className='flex items-center'>
//       <input
//         type='text'
//         value={query}
//         onChange={e => setQuery(e.target.value)}
//         placeholder='Search Pokémon...'
//         className='p-2 rounded-md bg-gray-700 text-white'
//       />
//       <button type='submit' className='ml-2 p-2 bg-blue-500 rounded-md text-white'>
//         Search
//       </button>
//     </form>
//   )
// }

// export default Search

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchPokemon } from '../../store/thunks/searchPokemon'
import { AppDispatch } from '../../store'

const Search: React.FC = () => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch<AppDispatch>()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    if (e.target.value.length >= 3) {
      dispatch(searchPokemon(e.target.value))
    }
  }

  return (
    <div className='relative'>
      <input
        type='text'
        className='w-full p-2 pl-10 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
        placeholder='Search Pokémon by name or number...'
        value={query}
        onChange={handleSearch}
      />
      <svg
        className='absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M10 21a1 1 0 001 1h4a1 1 0 001-1v-1h-6v1zM10 19h4v-3a1 1 0 011-1h4a1 1 0 001-1V9a5 5 0 10-10 0v6a1 1 0 001 1h4a1 1 0 001 1v3h-6v-1a1 1 0 011-1h4v-3a1 1 0 011-1h4v-6a5 5 0 10-10 0v6a1 1 0 001 1h4a1 1 0 001 1v3h-4a1 1 0 00-1 1v1z'
        />
      </svg>
    </div>
  )
}

export default Search
