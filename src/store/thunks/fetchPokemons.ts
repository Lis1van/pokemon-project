import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Pokemon } from '../../types/index.d'

interface FetchPokemonsResponse {
  pokemons: Pokemon[]
  totalPages: number
}

interface FetchPokemonsArgs {
  page: number
}

export const fetchPokemons = createAsyncThunk<FetchPokemonsResponse, number>('pokemon/fetchPokemons', async page => {
  const limit = 20 // Количество покемонов на одной странице
  const offset = (page - 1) * limit

  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  const data = response.data

  // Загружаем детальную информацию о каждом покемоне
  const pokemons: Pokemon[] = await Promise.all(
    data.results.map(async (pokemon: { name: string; url: string }) => {
      const details = await axios.get(pokemon.url)
      return details.data
    }),
  )

  return {
    pokemons,
    totalPages: Math.ceil(data.count / limit),
  }
})
