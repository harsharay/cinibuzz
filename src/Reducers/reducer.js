const initState = {
    movieData : [],
    isSearch: false,
    currentQuery: '',
    movieDetail: {},
    movieCredits: {},
    showMovieDetail : false,
    movieVideos: {},
    similarMovies: [],
    keywords: [],
    defaultGenre: '',
}

const RootReducer = (state = initState, action) => {
    if(action.type==="SAVE_MOVIES") {
        return {
            ...state,
            movieData : action.payload
        }
    } else if (action.type === 'CLEAR_MOVIES') {
        return {
            ...state,
            movieData : []
        }
    } else if (action.type === 'SET_SEARCH') {
        return {
            ...state,
            isSearch : true
        }
    } else  if (action.type === 'CURRENT_QUERY') {
        return {
            ...state,
            currentQuery : action.payload
        }
    } else if(action.type === 'SET_MOVIE_DETAIL') {
        return {
            ...state,
            movieDetail : action.payload
        }
    } else if(action.type === 'SET_MOVIE_CREDITS') {
        return {
            ...state,
            movieCredits : action.payload
        }
    } else if(action.type === 'SHOW_MOVIE_DETAIL') {
        return {
            ...state,
            showMovieDetail : true
        }
    } else if(action.type === 'DISABLE_MOVIE_DETAIL') {
        return {
            ...state,
            showMovieDetail : false
        }
    } else if(action.type === 'SET_MOVIE_VIDEOS') {
        return {
            ...state,
            movieVideos : action.payload
        }
    } else if(action.type === 'SET_SIMILAR_MOVIES') {
        return {
            ...state,
            similarMovies : action.payload
        }
    } else if(action.type === 'SET_KEYWORDS') {
        return {
            ...state,
            keywords : action.payload
        }
    } else if(action.type === 'SET_DEFAULT_GENRE') {
        return {
            ...state,
            defaultGenre : action.payload
        }
    }
    return state;
}

export default RootReducer;