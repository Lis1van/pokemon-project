import React from 'react'
import { useTheme } from 'next-themes'
import { FaMoon, FaSun, FaUser } from 'react-icons/fa'
import Search from '../Search'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header className='flex items-center justify-between p-4 bg-gray-800 text-white'>
      <div className='flex items-center space-x-4'>
        <Link to='/'>
          <img src='/assets/images/logo.png' alt='Pokemon Logo' width={100} height={40} />
        </Link>
        <button onClick={toggleTheme}>{theme === 'dark' ? <FaSun /> : <FaMoon />}</button>
        <Search />
      </div>
      <div className='flex items-center space-x-4'>
        <FaUser />
      </div>
    </header>
  )
}

export default Header
