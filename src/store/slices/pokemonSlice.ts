import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchPokemonById } from '../thunks/fetchPokemonById' // Импортируйте созданный thunk
import { Pokemon } from '../../types' // Импортируйте типы, если необходимо

interface PokemonState {
  pokemons: Pokemon[]
  currentPage: number
  totalPages: number
  loading: boolean
  error: string | null
}

const initialState: PokemonState = {
  pokemons: [],
  currentPage: 1,
  totalPages: 0,
  loading: false,
  error: null,
}

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    // name: 'pokemon',
    // initialState,
    // reducers: {},
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPokemonById.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPokemonById.fulfilled, (state, action: PayloadAction<Pokemon>) => {
        state.loading = false
        const pokemon = action.payload
        const existingPokemon = state.pokemons.find(p => p.id === pokemon.id)
        if (!existingPokemon) {
          state.pokemons.push(pokemon)
        }
      })
      .addCase(fetchPokemonById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const selectPokemons = (state: { pokemon: PokemonState }) => state.pokemon.pokemons
export const selectTotalPages = (state: { pokemon: PokemonState }) => state.pokemon.totalPages
export const selectPokemonsByType = (state: { pokemon: PokemonState }) => state.pokemon.pokemons
export const selectPokemonById = (state: { pokemon: PokemonState }, id: number) =>
  state.pokemon.pokemons.find(pokemon => pokemon.id === id)

export const selectAllPokemons = (state: { pokemon: PokemonState }) => ({
  pokemons: state.pokemon.pokemons,
  currentPage: state.pokemon.currentPage,
  totalPages: state.pokemon.totalPages,
})

export default pokemonSlice.reducer
