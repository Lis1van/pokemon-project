export interface Pokemon {
  id: number
  name: string
  sprites: {
    front_default: string
  }
  types: { type: { name: string } }[]
  abilities: Ability[]
  base_experience: string
}

export interface PokemonState {
  pokemons: Pokemon[]
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
    evolves_to: { species: { name: string } }[]
  }
}

export interface EvolutionsState {
  evolutionChains: EvolutionChain[]
  loading: boolean
  error: string | null
}
