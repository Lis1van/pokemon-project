import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchEvolutions = createAsyncThunk(
  'evolutions/fetchEvolutions',
  async (pokemonId: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${pokemonId}`)
      return response.data
    } catch (error) {
      return rejectWithValue('Failed to fetch evolutions')
    }
  },
)
