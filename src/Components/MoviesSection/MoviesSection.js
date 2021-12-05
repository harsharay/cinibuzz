import React from 'react';
import { connect } from 'react-redux';
import GenresSection from '../GenresSection/GenresSection';
import ListOfMovies from '../ListOfMovies/ListOfMovies';
import './MoviesSection.css'

const SEARCH_TEXT = 'Showing results for ';
const BROWSE_TEXT = 'Browse movies by category';

const MoviesSection = (props) => {
    return (
        <div className="moviesSection-root">
            {/* Title */}
            <div>
                <p style={{fontSize: '40px'}}>
                    {!props.isSearch ? BROWSE_TEXT : SEARCH_TEXT + props.currentQuery}
                </p>
            </div>
            
            <>
                {/* Genres div */}
               {!props.isSearch ?  <div>
                    <GenresSection />
                </div>
                : <div />}

                {/* Movies List */}
                <div>
                    <ListOfMovies />
                </div>
            </>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        movieList: state.movieData,
        isSearch: state.isSearch,
        currentQuery: state.currentQuery,
        defaultGenre: state.defaultGenre
    }
}

export default connect(mapStateToProps, null)(MoviesSection);
