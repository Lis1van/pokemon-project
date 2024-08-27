import { createSlice } from '@reduxjs/toolkit'
import { fetchGenerations, fetchGenerationById } from '../thunks/fetchGenerations'
import { GenerationsState } from '../../types'

const initialState: GenerationsState = {
  generations: [],
  loading: false,
  error: null,
}

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
