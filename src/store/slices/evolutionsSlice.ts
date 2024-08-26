import { createSlice } from '@reduxjs/toolkit'
import { fetchEvolutions } from '../thunks/fetchEvolutions'
import { EvolutionsState } from '../../types'

const initialState: EvolutionsState = {
  evolutionChains: [],
  loading: false,
  error: null,
}

const evolutionsSlice = createSlice({
  name: 'evolutions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchEvolutions.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchEvolutions.fulfilled, (state, action) => {
        state.loading = false
        state.evolutionChains = [action.payload] // assuming we get one chain at a time
      })
      .addCase(fetchEvolutions.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch evolutions'
      })
  },
})

export default evolutionsSlice.reducer
