import React from 'react';
import './GenresSection.css';
import Genre from '../Genre/Genre';
import { fetchGenres } from '../../apiUrls';
import { connect } from 'react-redux';

const GenresSection = (props) => {

    const [genresData, setGenresData] = React.useState([]);

    React.useEffect(() => {
        fetch(fetchGenres())
        .then(data => data.json())
        .then(json => {
            setGenresData(json.genres)
            props.setDefaultGenre(json.genres[0])
        })
    },[])

    return (
        <div className='genres-section-root' style={{width:'100%', overflowX:'scroll', marginBottom:'50px'}}>
           <div className='f-sb-r' style={{width:'200%'}}>
            {genresData.length > 0 && genresData.map((item) => {
                return <Genre key={item.id} name={item.name} genreId={item.id}/>
            })}
           </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDefaultGenre: (data) => dispatch({type:'SET_DEFAULT_GENRE', payload:data})
    }
}

export default connect(null,mapDispatchToProps)(GenresSection)
