// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// interface PaginationProps {
//   currentPage: number;
//   totalPages: number;
// }

// const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
//   const navigate = useNavigate();

//   const handlePageChange = (page: number) => {
//     if (page > 0 && page <= totalPages) {
//       navigate(`/?page=${page}`);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center space-x-4">
//       <button
//         onClick={() => handlePageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//         className="p-2 bg-blue-500 rounded-md text-white"
//       >
//         Previous
//       </button>
//       <span className="text-white">{currentPage} of {totalPages}</span>
//       <button
//         onClick={() => handlePageChange(currentPage + 1)}
//         disabled={currentPage === totalPages}
//         className="p-2 bg-blue-500 rounded-md text-white"
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Pagination;

// import React from 'react'
// import { useDispatch } from 'react-redux'
// import { setPage } from '../../features/pokemon/slice'

// interface PaginationProps {
//   currentPage: number
//   totalPages: number
// }

// const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
//   const dispatch = useDispatch()

//   const handlePageChange = (page: number) => {
//     dispatch(setPage(page))
//   }

//   return (
//     <div className='flex justify-center items-center mt-4'>
//       <button
//         className='px-3 py-1 mx-1 bg-gray-700 text-white rounded-lg'
//         disabled={currentPage === 1}
//         onClick={() => handlePageChange(currentPage - 1)}>
//         Previous
//       </button>
//       {[...Array(totalPages)].map((_, i) => (
//         <button
//           key={i}
//           className={`px-3 py-1 mx-1 ${currentPage === i + 1 ? 'bg-blue-500' : 'bg-gray-700'} text-white rounded-lg`}
//           onClick={() => handlePageChange(i + 1)}>
//           {i + 1}
//         </button>
//       ))}
//       <button
//         className='px-3 py-1 mx-1 bg-gray-700 text-white rounded-lg'
//         disabled={currentPage === totalPages}
//         onClick={() => handlePageChange(currentPage + 1)}>
//         Next
//       </button>
//     </div>
//   )
// }

// export default Pagination

import React from 'react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage)
    }
  }

  return (
    <div className='flex justify-center items-center space-x-4'>
      <button
        className='px-2 py-1 bg-gray-800 text-white'
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}>
        Previous
      </button>
      <span>
        {currentPage} / {totalPages}
      </span>
      <button
        className='px-2 py-1 bg-gray-800 text-white'
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  )
}

export default Pagination
