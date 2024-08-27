// import { createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'
// import { Pokemon } from '../../types' // Импортируйте типы, если необходимо

// export const fetchPokemonById = createAsyncThunk<Pokemon, number>(
//   'pokemon/fetchPokemonById',
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
//       return response.data
//     } catch (error) {
//       return rejectWithValue('Failed to fetch pokemon')
//     }
//   },
// )

// import { createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'
// import { Pokemon } from '../../types'

// export const fetchPokemonById = createAsyncThunk('pokemon/fetchPokemonById', async (id: number, thunkAPI) => {
//   try {
//     // Запрос на получение данных о покемоне
//     const response = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     const pokemon = response.data

//     // Запрос на получение данных о формах покемона
//     const speciesResponse = await axios.get(pokemon.species.url)
//     const speciesData = speciesResponse.data

//     // Если формы есть, делаем запрос на их получение
//     const forms = await Promise.all(
//       speciesData.varieties.map(async (variety: any) => {
//         const formResponse = await axios.get(variety.pokemon.url)
//         return formResponse.data
//       }),
//     )

//     // Возвращаем данные о покемоне вместе с формами
//     return { ...pokemon, forms }
//   } catch (error) {
//     return thunkAPI.rejectWithValue('Failed to fetch pokemon')
//   }
// })

import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Pokemon } from '../../types'
export const fetchPokemonById = createAsyncThunk('pokemon/fetchPokemonById', async (id: number, thunkAPI) => {
  try {
    // Запрос на получение данных о покемоне
    const response = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon = response.data

    // Запрос на получение данных о видах покемона
    const speciesResponse = await axios.get(pokemon.species.url)
    const speciesData = speciesResponse.data

    // Проверяем, есть ли формы у покемона
    const forms = await Promise.all(
      speciesData.varieties.map(async (variety: any) => {
        if (variety.pokemon.url) {
          const formResponse = await axios.get(variety.pokemon.url)
          return formResponse.data
        }
        return null
      }),
    )

    return { ...pokemon, forms: forms.filter(Boolean) } // фильтруем null значения
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed to fetch pokemon')
  }
})
