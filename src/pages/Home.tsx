import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemons } from '../store/thunks/fetchPokemons'
import PokemonCard from '../components/PokemonCard'
import Pagination from '../components/Pagination'
import { AppDispatch } from '../store'
import { PokemonState } from '../types'
import { setPage } from '../store/slices/pokemonSlice'

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { pokemons, currentPage, totalPages } = useSelector((state: { pokemon: PokemonState }) => state.pokemon)

  useEffect(() => {
    dispatch(fetchPokemons(currentPage))
  }, [dispatch, currentPage])

  const handlePageChange = async (page: number) => {
    dispatch(setPage(page))
    await dispatch(fetchPokemons(page))
  }

  return (
    <div>
      {pokemons.length > 0 ? (
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4'>
          {pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      ) : (
        <div>Загрузка покемонов...</div>
      )}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  )
}

export default Home
