import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// import { GenerationsState } from '../../types'

export const fetchGenerations = createAsyncThunk('generations/fetchGenerations', async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/generation')
  return response.data.results
})

export const fetchGenerationById = createAsyncThunk('generations/fetchGenerationById', async (id: number) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/generation/${id}`)
  return response.data
})
