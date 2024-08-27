// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useTheme } from 'next-themes'
// import { FaSearch, FaMoon, FaSun, FaUser } from 'react-icons/fa'

// const Header: React.FC = () => {
//   const { theme, setTheme } = useTheme()

//   const toggleTheme = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark')
//   }

//   return (
//     <header className='flex items-center justify-between p-4 bg-gray-800 text-white'>
//       <Link to='/' className='text-2xl font-bold'>
//         <img src='/assets/images/logo.png' alt='Logo' className='h-8' />
//       </Link>
//       <div className='flex items-center space-x-4'>
//         <button onClick={toggleTheme}>{theme === 'dark' ? <FaSun /> : <FaMoon />}</button>
//         <Link to='../search' className='flex items-center'>
//           <FaSearch />
//         </Link>
//         <Link to='/user' className='flex items-center'>
//           <FaUser />
//         </Link>
//       </div>
//     </header>
//   )
// }

// export default Header

// import React from 'react'
// import { useTheme } from 'next-themes'
// import { useDispatch } from 'react-redux'
// import { FaMoon, FaSun, FaUser } from 'react-icons/fa'
// import Search from '../Search'
// import { searchPokemon } from '../../store/thunks/searchPokemon'
// import { AppDispatch } from '../../store'
// import { useNavigate } from 'react-router-dom'

// const Header: React.FC = () => {
//   const { theme, setTheme } = useTheme()
//   const dispatch = useDispatch<AppDispatch>()
//   const navigate = useNavigate()

//   const toggleTheme = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark')
//   }

//   const handleSearch = (query: string) => {
//     console.log('Search triggered for:', query)
//     dispatch(searchPokemon(query))
//     navigate('/search-results')
//   }

//   return (
//     <header className='flex items-center justify-between p-4 bg-gray-800 text-white'>
//       <div className='flex items-center space-x-4'>
//         <button onClick={toggleTheme}>{theme === 'dark' ? <FaSun /> : <FaMoon />}</button>
//         <Search onSearch={handleSearch} />
//       </div>
//       <div className='flex items-center space-x-4'>
//         <FaUser />
//       </div>
//     </header>
//   )
// }

// export default Header

// import React from 'react'
// import { useTheme } from 'next-themes'
// // import { useDispatch } from 'react-redux'
// import { FaMoon, FaSun, FaUser } from 'react-icons/fa'
// import Search from '../Search'
// import { searchPokemon } from '../../store/thunks/searchPokemon'
// import { AppDispatch } from '../../store'
// import { useNavigate } from 'react-router-dom'
// import Image from 're'

// const Header: React.FC = () => {
//   const { theme, setTheme } = useTheme()
//   // const dispatch = useDispatch<AppDispatch>()
//   // const navigate = useNavigate()

//   const toggleTheme = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark')
//   }

//   // const handleSearch = (query: string) => {
//   //   console.log('Search triggered for:', query)
//   //   dispatch(searchPokemon(query))
//   //   navigate('/search-results')
//   // }

//   return (
//     <header className='flex items-center justify-between p-4 bg-gray-800 text-white'>
//       <div className='flex items-center space-x-4'>
//         <img src='/assets/images/logo.png' alt='Pokemon Logo' width={100} height={40} />
//         <button onClick={toggleTheme}>{theme === 'dark' ? <FaSun /> : <FaMoon />}</button>
//         <Search />
//       </div>
//       <div className='flex items-center space-x-4'>
//         <FaUser />
//       </div>
//     </header>
//   )
// }

// export default Header

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
