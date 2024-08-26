import React from 'react'
import { useTheme } from 'next-themes'
import { FaSearch, FaMoon, FaSun, FaUser } from 'react-icons/fa'
import Search from '../Search'

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const handleSearch = () => {
    console.log('Search triggered')
    // Здесь можно добавить логику для выполнения поиска
  }

  return (
    <header className='flex items-center justify-between p-4 bg-gray-800 text-white'>
      <div className='flex items-center space-x-4'>
        <button onClick={toggleTheme}>{theme === 'dark' ? <FaSun /> : <FaMoon />}</button>
        <Search onSearch={handleSearch} />
        <FaSearch onClick={handleSearch} />
      </div>
      <div className='flex items-center space-x-4'>
        <FaUser />
      </div>
    </header>
  )
}

export default Header
