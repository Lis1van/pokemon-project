import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Pokemon } from '../../types/index.d'
import { RootState } from '../../store'

export const searchPokemon = createAsyncThunk<Pokemon[], string, { state: RootState }>(
  'pokemon/searchPokemon',
  async (query, { getState }) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`)
    const pokemon = response.data
    return [pokemon]
  },
)
