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
