import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Pokemon } from '../../types'

export const fetchPokemonsByAbility = createAsyncThunk<
  { pokemons: Pokemon[]; totalPages: number }, // Типизация результата
  { abilityName: string; page: number } // Типизация аргументов
>('pokemon/fetchPokemonsByAbility', async ({ abilityName, page }, { rejectWithValue }) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/ability/${abilityName}/`)
    const pokemons = response.data.pokemon.map((p: any) => p.pokemon) // Получаем покемонов с этой способностью

    // Здесь можно реализовать логику для постраничного отображения
    const totalPages = Math.ceil(pokemons.length / 20) // Например, 20 покемонов на страницу
    const paginatedPokemons = pokemons.slice((page - 1) * 20, page * 20)

    return { pokemons: paginatedPokemons, totalPages }
  } catch (error) {
    return rejectWithValue('Failed to fetch pokemons by ability')
  }
})
