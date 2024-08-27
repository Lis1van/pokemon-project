// export interface PokemonForm {
//   id: number
//   name: string
//   url: string
//   sprites: {
//     front_default: string
//     [key: string]: any
//   }
//   types: Array<{ type: { name: string } }>
//   stats: Array<{ base_stat: number; stat: { name: string } }>
// }
export interface Pokemon {
  id: number
  name: string
  sprites: {
    front_default: string
  }
  types: { type: { name: string } }[]
  abilities: Ability[]
  base_experience: string
  height: number
  weight: number
  stats: Array<{ stat: { name: string }; base_stat: number }>
  forms: PokemonForm[]
  species: {
    url: string
  }
}

export interface PokemonForm {
  name: string
  url: string
}

export interface PokemonState {
  pokemons: Pokemon[]
  searchResults: Pokemon[] // Добавляем это поле
  currentPage: number
  totalPages: number
  loading: boolean
  error: string | null
  pokemonsByAbility: {
    pokemons: Pokemon[]
    currentPage: number
    totalPages: number
    loading: boolean
    error: string | null
  }
}

export interface Generation {
  id: number
  name: string
}

export interface GenerationsState {
  generations: Generation[]
  loading: boolean
  error: string | null
}
export interface EvolutionChain {
  id: number
  chain: {
    evolves_to: Array<{
      species: { name: string; url: string }
      evolves_to: Array<any> // This can be recursively nested, so it could be an array of objects or empty
    }>
    species: { name: string; url: string }
  }
}

export interface EvolutionsState {
  evolutionChains: EvolutionChain[]
  loading: boolean
  error: string | null
}
