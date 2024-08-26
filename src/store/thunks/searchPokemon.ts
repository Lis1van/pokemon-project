import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const searchPokemon = createAsyncThunk('pokemon/searchPokemon', async (query: string, { rejectWithValue }) => {
  try {
    const nameSearch = axios.get(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`)
    const typeSearch = axios.get(`https://pokeapi.co/api/v2/type/${query.toLowerCase()}`)
    const abilitySearch = axios.get(`https://pokeapi.co/api/v2/ability/${query.toLowerCase()}`)

    const [nameResult, typeResult, abilityResult] = await Promise.allSettled([nameSearch, typeSearch, abilitySearch])

    const results = []
    if (nameResult.status === 'fulfilled') results.push(nameResult.value.data)
    if (typeResult.status === 'fulfilled') results.push(...typeResult.value.data.pokemon.map((p: any) => p.pokemon))
    if (abilityResult.status === 'fulfilled')
      results.push(...abilityResult.value.data.pokemon.map((p: any) => p.pokemon))

    return results
  } catch (error) {
    return rejectWithValue('Search failed')
  }
})
