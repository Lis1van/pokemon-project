import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Pokemon } from '../../types' // Импортируйте типы, если необходимо

export const fetchPokemonById = createAsyncThunk<Pokemon, number>(
  'pokemon/fetchPokemonById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      return response.data
    } catch (error) {
      return rejectWithValue('Failed to fetch pokemon')
    }
  },
)
