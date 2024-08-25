import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { fetchPokemonById } from '../thunks/fetchPokemonById'
import { fetchPokemonsByAbility } from '../thunks/fetchPokemonsByAbility'
import { Pokemon } from '../../types'

interface PokemonState {
  pokemons: Pokemon[]
  currentPage: number
  totalPages: number
  loading: boolean
  error: string | null
  pokemonsByAbility: {
    pokemons: Pokemon[]
    currentPage: number
    totalPages: number
    loading: boolean
    error: string | null
  }
}

const initialState: PokemonState = {
  pokemons: [],
  currentPage: 1,
  totalPages: 0,
  loading: false,
  error: null,
  pokemonsByAbility: {
    pokemons: [],
    currentPage: 1,
    totalPages: 0,
    loading: false,
    error: null,
  },
}

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
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
      .addCase(fetchPokemonsByAbility.pending, state => {
        state.pokemonsByAbility.loading = true
        state.pokemonsByAbility.error = null
      })
      .addCase(
        fetchPokemonsByAbility.fulfilled,
        (state, action: PayloadAction<{ pokemons: Pokemon[]; totalPages: number }>) => {
          state.pokemonsByAbility.loading = false
          state.pokemonsByAbility.pokemons = action.payload.pokemons
          state.pokemonsByAbility.totalPages = action.payload.totalPages
        },
      )
      .addCase(fetchPokemonsByAbility.rejected, (state, action) => {
        state.pokemonsByAbility.loading = false
        state.pokemonsByAbility.error = action.payload as string
      })
  },
})

const selectPokemonState = (state: { pokemon: PokemonState }) => state.pokemon

export const selectPokemons = createSelector([selectPokemonState], pokemonState => pokemonState.pokemons)

export const selectTotalPages = createSelector([selectPokemonState], pokemonState => pokemonState.totalPages)

export const selectPokemonsByType = createSelector([selectPokemonState], pokemonState => pokemonState.pokemons)

export const selectPokemonById = createSelector(
  [selectPokemons, (state: { pokemon: PokemonState }, id: number) => id],
  (pokemons, id) => pokemons.find(pokemon => pokemon.id === id),
)

export const selectAllPokemons = createSelector([selectPokemonState], pokemonState => ({
  pokemons: pokemonState.pokemons,
  currentPage: pokemonState.currentPage,
  totalPages: pokemonState.totalPages,
}))

export const selectPokemonsByAbility = createSelector([selectPokemonState], pokemonState => ({
  pokemons: pokemonState.pokemonsByAbility.pokemons,
  currentPage: pokemonState.pokemonsByAbility.currentPage,
  totalPages: pokemonState.pokemonsByAbility.totalPages,
}))

export default pokemonSlice.reducer
