import React from 'react'
import { connect } from 'react-redux';
import './Genre.css'
import {StyledButton} from '../../Components/SearchBlock/SearchBlock.js'
import {fetchGenreMovies} from '../../apiUrls';


const Genre = (props) => {


    const getMovies = (id) => {
        // props.clearingMovieData();
        fetch(fetchGenreMovies(id))
        .then(data => data.json())
        .then(json => props.savingMovieData(json))
    }

    React.useEffect(() => {
        getMovies(props.defaultGenre.id)
    },[])

    return (
        <div>
            <StyledButton isGenre={true} onClick={() => {
                getMovies(props.genreId)
            }}>{props.name}</StyledButton>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        defaultGenre: state.defaultGenre
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        savingMovieData: (data) => dispatch({type: 'SAVE_MOVIES', payload: data}),
        clearingMovieData: () => dispatch({type: 'CLEAR_MOVIES'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Genre);
