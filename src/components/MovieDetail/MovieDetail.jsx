import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './MovieDetail.scss'

import MovieApi from '../../api/MovieApi'
import { APIKey } from '../../api/MovieApiKey'

const MovieDetail = () => {

    const [movie, setMovie] = useState([])
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        const fetchDetail = async () => {
            const res = await MovieApi.get(`?apikey=${APIKey}&i=${id}&plot=full`)
                        .catch((err) => {
                            console.error("Error ", err)
                        })
            setMovie(res.data)
            setLoading(true)
        }
    }, [])

    return (
        <div>MovieDetail</div>
    )
}

export default MovieDetail