import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// import { EvolutionsState } from '../../types'

export const fetchEvolutions = createAsyncThunk('evolutions/fetchEvolutions', async (pokemonId: number) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${pokemonId}`)
  return response.data
})
