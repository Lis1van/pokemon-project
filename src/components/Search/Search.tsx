// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { searchPokemon } from '../../store/thunks/searchPokemon'
// import { AppDispatch } from '../../store'

// interface SearchProps {
//   onSearch: () => void
// }

// const Search: React.FC<SearchProps> = ({ onSearch }) => {
//   const [query, setQuery] = useState('')
//   const dispatch = useDispatch<AppDispatch>()

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setQuery(e.target.value)
//     if (e.target.value.length >= 3) {
//       dispatch(searchPokemon(e.target.value))
//     }
//   }

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'Enter') {
//       onSearch()
//     }
//   }

//   return (
//     <div className='relative'>
//       <input
//         type='text'
//         className='w-full p-2 pl-10 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//         placeholder='Search Pokémon by name, type, or ability...'
//         value={query}
//         onChange={handleSearch}
//         onKeyDown={handleKeyDown}
//       />
//       <svg
//         className='absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400'
//         xmlns='http://www.w3.org/2000/svg'
//         fill='none'
//         viewBox='0 0 24 24'
//         stroke='currentColor'
//         onClick={onSearch}>
//         <path
//           strokeLinecap='round'
//           strokeLinejoin='round'
//           strokeWidth={2}
//           d='M10 21a1 1 0 001 1h4a1 1 0 001-1v-1h-6v1zM10 19h4v-3a1 1 0 011-1h4a1 1 0 001-1V9a5 5 0 10-10 0v6a1 1 0 001 1h4a1 1 0 001 1v3h-6v-1a1 1 0 011-1h4v-3a1 1 0 011-1h4v-6a5 5 0 10-10 0v6a1 1 0 001 1h4a1 1 0 001 1v3h-4a1 1 0 00-1 1v1z'
//         />
//       </svg>
//     </div>
//   )
// }

// export default Search

// import React, { useState } from 'react'
// import { FaSearch } from 'react-icons/fa'

// interface SearchProps {
//   onSearch: (query: string) => void
// }

// const Search: React.FC<SearchProps> = ({ onSearch }) => {
//   const [query, setQuery] = useState('')

//   const handleSearch = () => {
//     if (query.trim()) {
//       onSearch(query.trim())
//     }
//   }

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'Enter') {
//       handleSearch()
//     }
//   }

//   return (
//     <div className='relative flex items-center'>
//       <input
//         type='text'
//         className='w-full p-2 pl-10 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//         placeholder='Search Pokémon by name, type, or ability...'
//         value={query}
//         onChange={e => setQuery(e.target.value)}
//         onKeyDown={handleKeyDown}
//       />
//       <FaSearch className='absolute left-3 text-gray-400 cursor-pointer' onClick={handleSearch} />
//     </div>
//   )
// }

// export default Search

// import React, { useState, useEffect } from 'react'
// import { FaSearch } from 'react-icons/fa'
// import { useDispatch } from 'react-redux'
// import { AppDispatch } from '../../store'
// import { searchPokemon } from '../../store/thunks/searchPokemon'
// import { useNavigate } from 'react-router-dom'

// const Search: React.FC = () => {
//   const [query, setQuery] = useState('')
//   const dispatch = useDispatch<AppDispatch>()
//   const navigate = useNavigate()

//   useEffect(() => {
//     const delayDebounceFn = setTimeout(() => {
//       if (query.length >= 2) {
//         dispatch(searchPokemon(query))
//         navigate('/search-results')
//       }
//     }, 300)

//     return () => clearTimeout(delayDebounceFn)
//   }, [query, dispatch, navigate])

//   const handleSearch = () => {
//     if (query.trim().length >= 2) {
//       dispatch(searchPokemon(query.trim()))
//       navigate('/search-results')
//     }
//   }

//   return (
//     <div className='relative flex items-center'>
//       <input
//         type='text'
//         className='w-full p-2 pl-10 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//         placeholder='Search Pokémon by name, type, or ability...'
//         value={query}
//         onChange={e => setQuery(e.target.value)}
//       />
//       <FaSearch className='absolute left-3 text-gray-400 cursor-pointer' onClick={handleSearch} />
//     </div>
//   )
// }

// export default Search

import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store'
import { searchPokemon } from '../../store/thunks/searchPokemon'
import { useNavigate } from 'react-router-dom'

const Search: React.FC = () => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const handleSearch = () => {
    if (query.trim().length >= 2) {
      dispatch(searchPokemon(query.trim()))
      navigate('/search-results')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className='relative flex items-center'>
      <input
        type='text'
        className='w-full p-2 pl-10 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
        placeholder='Search Pokémon by name, type, or ability...'
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <FaSearch className='absolute left-3 text-gray-400 cursor-pointer' onClick={handleSearch} />
    </div>
  )
}

export default Search
