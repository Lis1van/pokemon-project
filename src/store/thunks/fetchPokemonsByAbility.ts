import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Pokemon } from '../../types'

export const fetchPokemonsByAbility = createAsyncThunk<
  { pokemons: Pokemon[]; totalPages: number },
  { abilityName: string; page: number }
>('pokemon/fetchPokemonsByAbility', async ({ abilityName, page }, { rejectWithValue }) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/ability/${abilityName}/`)
    const pokemonUrls = response.data.pokemon.map((p: any) => p.pokemon.url)

    const pokemonsPerPage = 20
    const startIndex = (page - 1) * pokemonsPerPage
    const endIndex = startIndex + pokemonsPerPage

    const paginatedPokemonUrls = pokemonUrls.slice(startIndex, endIndex)

    const pokemonDetails = await Promise.all(
      paginatedPokemonUrls.map(async (url: string) => {
        const pokemonResponse = await axios.get(url)
        return pokemonResponse.data
      }),
    )

    const totalPages = Math.ceil(pokemonUrls.length / pokemonsPerPage)

    return { pokemons: pokemonDetails, totalPages }
  } catch (error) {
    return rejectWithValue('Failed to fetch pokemons by ability')
  }
})
