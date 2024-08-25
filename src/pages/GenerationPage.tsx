import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGenerations } from '../store/thunks/fetchGenerations'
import { AppDispatch } from '../store'
import { GenerationsState } from '../types'

const GenerationPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { generations, loading, error } = useSelector((state: { generations: GenerationsState }) => state.generations)

  useEffect(() => {
    dispatch(fetchGenerations())
  }, [dispatch])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h1>Generations</h1>
      {/* Render generations data here */}
    </div>
  )
}

export default GenerationPage
