import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Pokemon } from '../../types/index.d'

interface FetchPokemonsResponse {
  pokemons: Pokemon[]
  totalPages: number
}

export const fetchPokemons = createAsyncThunk<FetchPokemonsResponse, number>('pokemon/fetchPokemons', async page => {
  // console.log('Fetching pokemons for page:', page)
  const limit = 20
  const offset = (page - 1) * limit

  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  const data = response.data

  // console.log('API Response:', data)

  const pokemons: Pokemon[] = await Promise.all(
    data.results.map(async (pokemon: { name: string; url: string }) => {
      const details = await axios.get(pokemon.url)
      // console.log('Pokemon details:', details.data)
      return details.data
    }),
  )

  // console.log('Fetched pokemons:', pokemons)

  return {
    pokemons,
    totalPages: Math.ceil(data.count / limit),
  }
})
