import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { searchMovies } from '../../apiUrls';
import '../../App.css';
import './SearchBlock.css';

export const StyledButton = styled.button`
    background-color: ${props => !props.isGenre ? 'rgba(104, 85, 214, 0.54)' : '#fff'};
    border-radius: 12px;
    padding: 18px 50px;
    border: 0;
    outline: none;
    color: ${props => !props.isGenre ? 'rgb(255,255,255,0.5)' : 'black'};
    cursor: pointer;
`

export const StyledInput = styled.input`
    padding: 0 19px;
    border: none;
    outline: none;
    backgorund-color: #fff;
    width: 716px;
    height: 56px;
    margin-right: 20px;
    border-radius: 12px;
`

const SearchBlock = (props) => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const handleSearch = () => {
        props.setCurrentQuery(searchQuery);
        fetch(searchMovies(searchQuery))
        .then(data => {
            props.setSearch()
            props.clearingMovieData()
            return data.json()
        })
        .then(json => {
            props.saveSearchedData(json)
        })        
    }

    return (
        <div className="searchBlock-root flex-center-c">
            <p style={{fontSize: '40px'}}>Find perfect movie for the <span style={{fontWeight:'bold'}}>evening</span></p>
            <div style={{marginTop: '20px'}}>
                <StyledInput placeholder="Search movies" onChange={e => setSearchQuery(e.target.value)}/>
                <StyledButton isGenre={false} onClick={handleSearch}>SEARCH</StyledButton>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        clearingMovieData: () => dispatch({type: 'CLEAR_MOVIES'}),
        saveSearchedData: (data) => dispatch({type: 'SAVE_MOVIES', payload: data}),
        setSearch: (data) => dispatch({type: 'SET_SEARCH'}),
        setCurrentQuery: (data) => dispatch({type: 'CURRENT_QUERY', payload: data})
    }
}

export default connect(null, mapDispatchToProps)(SearchBlock);
