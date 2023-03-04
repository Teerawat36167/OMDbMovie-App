import React from 'react'
import './MovieList.scss'
import { useSelector } from 'react-redux' // access value in store
import MovieCard from '../MovieCard/MovieCard'

const MovieList = () => {

    const { movies } = useSelector((state) => state.movies)

    return (
        <div className='movie-container'>
            {movies && movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </div>
    )
}

export default MovieList