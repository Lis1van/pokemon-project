import { combineReducers } from '@reduxjs/toolkit'
import pokemonReducer from './slices/pokemonSlice'
import generationsReducer from './slices/generationSlice'
import evolutionsReducer from './slices/evolutionsSlice'
import pokemonFormReducer from './slices/pokemonFormSlice'

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  generations: generationsReducer,
  evolutions: evolutionsReducer,
  pokemonForm: pokemonFormReducer,
})

export default rootReducer
