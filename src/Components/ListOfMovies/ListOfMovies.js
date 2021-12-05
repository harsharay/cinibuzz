import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import SingleMovie from '../SingleMovie/SingleMovie'

export const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 45px;
`

const ListOfMovies = (props) => {

    const [listOfMovies, setListOfMovies] = React.useState([])

    React.useEffect(() => {
        setListOfMovies(props.movies.results);
    },[props.movies])
    
    return (
        <StyledGrid>
            {listOfMovies ? listOfMovies.length > 0 && listOfMovies.map((movie, index) => {
                return <SingleMovie key={index} movie={movie} />
            })
            : <div>No movies found</div>}
        </StyledGrid>
    )
}

const mapStateToProps = (state) => {
    return {
        movies: state.movieData
    }
}

export default connect(mapStateToProps, null)(ListOfMovies)
