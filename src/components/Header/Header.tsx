// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { toggleTheme } from '../../features/theme/slice'
// import Search from '../Search'
// import UserIcon from '../UserIcon'
// import logo from '../../assets/images/logo.png'

// const Header: React.FC = () => {
//   const dispatch = useDispatch()

//   const handleThemeToggle = () => {
//     dispatch(toggleTheme())
//   }

//   return (
//     <header className='flex justify-between items-center p-4 bg-gray-800 text-white'>
//       <Link to='/'>
//         <img src={logo} alt='Logo' className='h-8' />
//       </Link>
//       <Search />
//       <div className='flex items-center space-x-4'>
//         <button onClick={handleThemeToggle} className='bg-blue-500 text-white px-3 py-2 rounded-md'>
//           Toggle Theme
//         </button>
//         <UserIcon />
//       </div>
//     </header>
//   )
// }

// export default Header

import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from 'next-themes'
import { FaSearch, FaMoon, FaSun, FaUser } from 'react-icons/fa'

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header className='flex items-center justify-between p-4 bg-gray-800 text-white'>
      <Link to='/' className='text-2xl font-bold'>
        <img src='/assets/images/logo.png' alt='Logo' className='h-8' />
      </Link>
      <div className='flex items-center space-x-4'>
        <button onClick={toggleTheme}>{theme === 'dark' ? <FaSun /> : <FaMoon />}</button>
        <Link to='/search' className='flex items-center'>
          <FaSearch />
        </Link>
        <Link to='/user' className='flex items-center'>
          <FaUser />
        </Link>
      </div>
    </header>
  )
}

export default Header
