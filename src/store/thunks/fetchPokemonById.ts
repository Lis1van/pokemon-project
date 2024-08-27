import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Pokemon, PokemonForm } from '../../types'

export const fetchPokemonById = createAsyncThunk<Pokemon, number>(
  'pokemon/fetchPokemonById',
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const pokemon = response.data

      const forms: PokemonForm[] = pokemon.forms.map(form => ({
        name: form.name,
        url: form.url,
      }))

      return { ...pokemon, forms }
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch pokemon')
    }
  },
)
