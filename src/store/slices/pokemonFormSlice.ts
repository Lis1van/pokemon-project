import { createSlice } from '@reduxjs/toolkit'
import { fetchPokemonForm } from '../thunks/fetchPokemonForm'
import { RootState } from '..'

interface PokemonFormState {
  form: any | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: PokemonFormState = {
  form: null,
  status: 'idle',
  error: null,
}

const pokemonFormSlice = createSlice({
  name: 'pokemonForm',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPokemonForm.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchPokemonForm.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.form = action.payload
      })
      .addCase(fetchPokemonForm.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Failed to fetch Pokemon form'
      })
  },
})

export const selectPokemonForm = (state: RootState) => state.pokemonForm.form

export default pokemonFormSlice.reducer
