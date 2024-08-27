import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPokemonForm = createAsyncThunk('pokemonForm/fetchPokemonForm', async (formId: number) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${formId}/`)
  return response.data
})
