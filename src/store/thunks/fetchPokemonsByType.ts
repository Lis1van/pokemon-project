import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Pokemon } from '../../types'

interface FetchPokemonsByTypeArgs {
  type: string
  page: number
}

interface FetchPokemonsByTypeResponse {
  pokemons: Pokemon[]
  totalPages: number
}

export const fetchPokemonsByType = createAsyncThunk<FetchPokemonsByTypeResponse, FetchPokemonsByTypeArgs>(
  'pokemon/fetchPokemonsByType',
  async ({ type, page }) => {
    const limit = 20 // Количество покемонов на одной странице
    const offset = (page - 1) * limit

    const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`)
    const data = response.data

    const pokemonsOfType = data.pokemon.slice(offset, offset + limit)
    const pokemons: Pokemon[] = await Promise.all(
      pokemonsOfType.map(async ({ pokemon }: { pokemon: { name: string; url: string } }) => {
        const details = await axios.get(pokemon.url)
        return details.data
      }),
    )

    return {
      pokemons,
      totalPages: Math.ceil(data.pokemon.length / limit),
    }
  },
)
