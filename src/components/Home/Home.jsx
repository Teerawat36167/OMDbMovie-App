import React from 'react'
import { useState, useEffect } from 'react'
import movieApi from '../../api/MovieApi'
import { APIKey } from '../../api/MovieApiKey'
import { useDispatch } from 'react-redux' // Update redux store
import { addMovie } from '../../store/Reducer'

import MovieListing from '../MovieList/MovieList'

const Home = () => {

    const dispatch = useDispatch()
    const [search, setSearch] = useState('')

    // API
    useEffect(() => {
        const fetchMovies = async () => {
            const searchKey = search ? search : "Thor"
            const res = await movieApi.get(`?apikey=${APIKey}&s=${searchKey}&type=movie`)

            setTimeout(() => {
                dispatch(addMovie(res.data.Search)) // Update to store
            }, 500)
        }

        fetchMovies()
    }, [])

    return (
        <div>
            <h3 style={{ margin: "1rem 0"}}>Movies</h3>
            <input type='text' placeholder='Search...' />
            <MovieListing />
        </div>
    )
}

export default Home