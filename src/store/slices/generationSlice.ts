import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Generation, GenerationsState } from '../../types'

const initialState: GenerationsState = {
  generations: [],
  loading: false,
  error: null,
}

export const fetchGenerations = createAsyncThunk('generations/fetchGenerations', async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/generation')
  return response.data.results
})

export const fetchGenerationById = createAsyncThunk('generations/fetchGenerationById', async (id: number) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/generation/${id}`)
  return response.data
})

const generationsSlice = createSlice({
  name: 'generations',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchGenerations.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchGenerations.fulfilled, (state, action) => {
        state.loading = false
        state.generations = action.payload
      })
      .addCase(fetchGenerations.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch generations'
      })
      .addCase(fetchGenerationById.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchGenerationById.fulfilled, (state, action) => {
        state.loading = false
        // Handle selected generation data if needed
      })
      .addCase(fetchGenerationById.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch generation details'
      })
  },
})

export default generationsSlice.reducer
