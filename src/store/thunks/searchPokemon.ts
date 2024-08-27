// import { createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'

// export const searchPokemon = createAsyncThunk('pokemon/searchPokemon', async (query: string, { rejectWithValue }) => {
//   try {
//     const nameSearch = axios.get(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`)
//     const typeSearch = axios.get(`https://pokeapi.co/api/v2/type/${query.toLowerCase()}`)
//     const abilitySearch = axios.get(`https://pokeapi.co/api/v2/ability/${query.toLowerCase()}`)

//     const [nameResult, typeResult, abilityResult] = await Promise.allSettled([nameSearch, typeSearch, abilitySearch])

//     const results = []
//     if (nameResult.status === 'fulfilled') results.push(nameResult.value.data)
//     if (typeResult.status === 'fulfilled') results.push(...typeResult.value.data.pokemon.map((p: any) => p.pokemon))
//     if (abilityResult.status === 'fulfilled')
//       results.push(...abilityResult.value.data.pokemon.map((p: any) => p.pokemon))

//     return results
//   } catch (error) {
//     return rejectWithValue('Search failed')
//   }
// })

// import { createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'
// import { Pokemon } from '../../types'

// interface SearchParams {
//   name?: string
//   type?: string
//   ability?: string
// }

// export const searchPokemon = createAsyncThunk<Pokemon[], string>(
//   'pokemon/searchPokemon',
//   async (query, { rejectWithValue }) => {
//     try {
//       const [nameResult, typeResult, abilityResult] = await Promise.allSettled([
//         axios.get(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`),
//         axios.get(`https://pokeapi.co/api/v2/type/${query.toLowerCase()}`),
//         axios.get(`https://pokeapi.co/api/v2/ability/${query.toLowerCase()}`),
//       ])

//       const results: Pokemon[] = []

//       if (nameResult.status === 'fulfilled') results.push(nameResult.value.data)
//       if (typeResult.status === 'fulfilled') results.push(...typeResult.value.data.pokemon.map((p: any) => p.pokemon))
//       if (abilityResult.status === 'fulfilled')
//         results.push(...abilityResult.value.data.pokemon.map((p: any) => p.pokemon))

//       return results
//     } catch (error) {
//       return rejectWithValue('Search failed')
//     }
//   },
// )

// import { createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'

// export const searchPokemon = createAsyncThunk('pokemon/searchPokemon', async (query: string, { rejectWithValue }) => {
//   try {
//     const nameSearch = axios.get(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`)
//     const typeSearch = axios.get(`https://pokeapi.co/api/v2/type/${query.toLowerCase()}`)
//     const abilitySearch = axios.get(`https://pokeapi.co/api/v2/ability/${query.toLowerCase()}`)

//     const [nameResult, typeResult, abilityResult] = await Promise.allSettled([nameSearch, typeSearch, abilitySearch])

//     const results = []
//     if (nameResult.status === 'fulfilled') results.push(nameResult.value.data)
//     if (typeResult.status === 'fulfilled') results.push(...typeResult.value.data.pokemon.map((p: any) => p.pokemon))
//     if (abilityResult.status === 'fulfilled')
//       results.push(...abilityResult.value.data.pokemon.map((p: any) => p.pokemon))

//     return results
//   } catch (error) {
//     return rejectWithValue('Search failed')
//   }
// })

// import { createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'

// export const searchPokemon = createAsyncThunk('pokemon/searchPokemon', async (query: string, { rejectWithValue }) => {
//   try {
//     const limit = 1000 // Увеличим лимит для получения большего количества результатов
//     const allPokemonsResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
//     const allPokemons = allPokemonsResponse.data.results

//     const filteredPokemons = allPokemons.filter((pokemon: any) =>
//       pokemon.name.toLowerCase().includes(query.toLowerCase()),
//     )

//     const detailedPokemons = await Promise.all(
//       filteredPokemons.map(async (pokemon: any) => {
//         const detailResponse = await axios.get(pokemon.url)
//         return detailResponse.data
//       }),
//     )

//     const typeSearch = axios.get(`https://pokeapi.co/api/v2/type/${query.toLowerCase()}`)
//     const abilitySearch = axios.get(`https://pokeapi.co/api/v2/ability/${query.toLowerCase()}`)

//     const [typeResult, abilityResult] = await Promise.allSettled([typeSearch, abilitySearch])

//     if (typeResult.status === 'fulfilled') {
//       const typePokemonsDetails = await Promise.all(
//         typeResult.value.data.pokemon.map(async (p: any) => {
//           const response = await axios.get(p.pokemon.url)
//           return response.data
//         }),
//       )
//       detailedPokemons.push(...typePokemonsDetails)
//     }

//     if (abilityResult.status === 'fulfilled') {
//       const abilityPokemonsDetails = await Promise.all(
//         abilityResult.value.data.pokemon.map(async (p: any) => {
//           const response = await axios.get(p.pokemon.url)
//           return response.data
//         }),
//       )
//       detailedPokemons.push(...abilityPokemonsDetails)
//     }

//     // Удаляем дубликаты
//     const uniquePokemons = Array.from(new Set(detailedPokemons.map(p => p.id))).map(id =>
//       detailedPokemons.find(p => p.id === id),
//     )

//     return uniquePokemons
//   } catch (error) {
//     return rejectWithValue('Search failed')
//   }
// })

import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const searchPokemon = createAsyncThunk('pokemon/searchPokemon', async (query: string, { rejectWithValue }) => {
  try {
    const limit = 1000 // Увеличим лимит для получения большего количества результатов
    const allPokemonsResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
    const allPokemons = allPokemonsResponse.data.results

    const filteredPokemons = allPokemons.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase()),
    )

    const detailedPokemons = await Promise.all(
      filteredPokemons.map(async (pokemon: any) => {
        const detailResponse = await axios.get(pokemon.url)
        return detailResponse.data
      }),
    )

    const typeSearch = axios.get(`https://pokeapi.co/api/v2/type/${query.toLowerCase()}`)
    const abilitySearch = axios.get(`https://pokeapi.co/api/v2/ability/${query.toLowerCase()}`)

    const [typeResult, abilityResult] = await Promise.allSettled([typeSearch, abilitySearch])

    if (typeResult.status === 'fulfilled') {
      const typePokemonsDetails = await Promise.all(
        typeResult.value.data.pokemon.map(async (p: any) => {
          const response = await axios.get(p.pokemon.url)
          return response.data
        }),
      )
      detailedPokemons.push(...typePokemonsDetails)
    }

    if (abilityResult.status === 'fulfilled') {
      const abilityPokemonsDetails = await Promise.all(
        abilityResult.value.data.pokemon.map(async (p: any) => {
          const response = await axios.get(p.pokemon.url)
          return response.data
        }),
      )
      detailedPokemons.push(...abilityPokemonsDetails)
    }

    // Удаляем дубликаты
    const uniquePokemons = Array.from(new Set(detailedPokemons.map(p => p.id))).map(id =>
      detailedPokemons.find(p => p.id === id),
    )

    return uniquePokemons
  } catch (error) {
    return rejectWithValue('Search failed')
  }
})
