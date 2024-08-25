import { combineReducers } from '@reduxjs/toolkit'
import pokemonReducer from './slices/pokemonSlice'
import generationsReducer from './slices/generationSlice'
import evolutionsReducer from './slices/evolutionsSlice'

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  generations: generationsReducer,
  evolutions: evolutionsReducer,
})

export default rootReducer
