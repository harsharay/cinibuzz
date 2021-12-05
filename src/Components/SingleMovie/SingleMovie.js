import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getKeywords, getMovieCredits, getMovieDetail, getMovieVideos, getSimilarMovies } from '../../apiUrls'
import '../../App.css'

export const StyledImage = styled.img`
    width: 250px;
    height: 380px;
    border-radius: 16px;
    cursor: pointer;
`

const imagePath = 'https://image.tmdb.org/t/p/w400'

const SingleMovie = (props) => {

    const handleShowMovieDetail = (data) => {
        const gettingMovieCredits = () => {
            fetch(getMovieCredits(data.id))
            .then(credtisData => credtisData.json())
            .then(credits => {
                props.setMoveiCredits(credits)
            })
        }

        const gettingMovieDetails = () => {
            fetch(getMovieDetail(data.id))
            .then(data => {
                return data.json()
            })
            .then(json => {
                props.setMovieDetail(json)
            })
        }

        const gettingMovieVideos = () => {
            fetch(getMovieVideos(data.id))
            .then(data => {
                return data.json()
            })
            .then(json => {
                props.setMovieVideos(json)
            })
        }

        const gettingSimilarMovies = () => {
            fetch(getSimilarMovies(data.id))
            .then(data => {
                return data.json()
            })
            .then(json => {
                props.setSimilarMovies(json)
            })
        }

        const gettingKeywords = () => {
            fetch(getKeywords(data.id))
            .then(data => {
                return data.json()
            })
            .then(json => {
                props.setKeywords(json)
            })
        }
       return Promise.all([gettingMovieDetails(), gettingMovieCredits(), gettingMovieVideos(),gettingSimilarMovies(), gettingKeywords()]).then(() => props.showMovieDetailPage()).catch(err => console.log(err))
    }

    return (
        <div onClick={() => handleShowMovieDetail(props.movie)}>
            {/* Movie Image data */}
            <div>
                <StyledImage src={imagePath + props.movie.poster_path} alt={props.movie.title} loading="lazy"/>
            </div>

            {/* Movie content Data */}
            <div className="m-l-5">
                <p style={{fontWeight:'bold'}}>{props.movie.title}</p>
                <p>{props.movie.release_date}</p>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMovieDetail: (data) => dispatch({type: 'SET_MOVIE_DETAIL', payload: data}),
        setMoveiCredits: (data) => dispatch({type: 'SET_MOVIE_CREDITS', payload: data}),
        setMovieVideos: (data) => dispatch({type: 'SET_MOVIE_VIDEOS', payload: data}),
        setSimilarMovies: (data) => dispatch({type: 'SET_SIMILAR_MOVIES', payload: data}),
        showMovieDetailPage: (data) => dispatch({type: 'SHOW_MOVIE_DETAIL', payload: data}),
        setKeywords: (data) => dispatch({type: 'SET_KEYWORDS', payload: data})
    }
}

export default connect(null, mapDispatchToProps)(SingleMovie)
