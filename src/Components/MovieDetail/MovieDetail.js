import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {StyledImage} from '../SingleMovie/SingleMovie'

export const StyledBannerImage = styled.img`
    width: ${props => props.isRecommendation ? '348px' : '1084px'};
    height:${props => props.isRecommendation ? '174px' : '540px'};;
    border-radius: 16px;
`

const imagePath = 'https://image.tmdb.org/t/p/original'
const imagePath500 = 'https://image.tmdb.org/t/p/w500'

const MovieDetail = (props) => {

    const directorsData = props?.movieCredits?.crew?.filter(item => item.job === 'Director')
    const screenplayData = props?.movieCredits?.crew?.filter(item => item.job === 'Screenplay')
    const actorsData = props?.movieCredits?.cast?.filter(item => item.known_for_department === 'Acting')

    return (
        <div className='moviesSection-root'>
            {props && props.movieDetail && 
            <div className='flex-center-c'>
                <div>
                    {/* banner image component */}
                    <StyledBannerImage src={imagePath + props.movieDetail.backdrop_path} alt={props.movieDetail.title} isRecommendation={false}/>
                </div>

                <div className='m-t-20' style={{margin:'auto'}}>
                    {/* Movie detail */}
                    <div className='f-sb-r'>
                        <div style={{width: '70%'}}>
                            {/* Overview */}
                            <div>
                                <p style={{fontWeight:'bold'}}>Overview</p>
                                {props && props.movieDetail && props.movieDetail.overview && 
                                    <p>{props.movieDetail.overview}</p>
                                }
                            </div>

                            <div className='f-sb-r' style={{width:'70%'}}>
                                {/* Directors */}
                                {directorsData && directorsData.length > 0 &&
                                    directorsData.slice(0,2).map(item => {
                                        return (
                                            <div>
                                                
                                                <p>{item.name}</p>
                                                <p>{item.job}</p>
                                            </div>
                                        )
                                    })
                                }

                                {/* Screenplay */}
                                {screenplayData && screenplayData.length > 0 &&
                                    screenplayData.slice(0,2).map(item => {
                                        return (
                                            <div>
                                                
                                                <p>{item.name}</p>
                                                <p>{item.job}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='f-sb-c' style={{width: '20%', alignItems: 'start', marginLeft: '50px', paddingLeft: '20px'}}>
                            {/* Status */}
                            <div>
                                <p className='f-sb-c' style={{alignItems: 'start'}}>
                                    <span className='f-w-600'>Status</span>
                                    <span className='f-w-500'>{props.movieDetail.status}</span>
                                </p>
                                {/* <p>{props.movieDetail.status}</p> */}
                            </div>

                            {/* Language */}
                            <div>
                                <p className='f-sb-c' style={{alignItems: 'start'}}>
                                    <span className='f-w-600'>Language</span>
                                    <span className='f-w-500'>{props.movieDetail.original_language}</span>
                                </p>
                            </div>

                            {/* Budget */}
                            <div>
                                <p className='f-sb-c' style={{alignItems: 'start'}}>
                                    <span className='f-w-600'>Budget</span>
                                    <span className='f-w-500'>{props.movieDetail.budget}</span>
                                </p>
                            </div>

                            {/* Revenue */}
                            <div>
                                <p className='f-sb-c' style={{alignItems: 'start'}}>
                                    <span className='f-w-600'>Revenue</span>
                                    <span className='f-w-500'>{props.movieDetail.revenue}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                        
                    <div style={{height: '1px', backgroundColor:'gray', opacity: '10%'}}></div>
                    <div className='m-t-10' style={{overflowX:'scroll'}}>
                        {/* Cast */}
                        <p className='m-l-10 f-w-600'>Cast</p>
                        <div style={{width:'90%', overflowX:'scroll'}}>
                            <div className='f-sb-r' style={{width:'120%'}}>
                                {actorsData && actorsData.length > 0 &&
                                    actorsData.slice(0,5).map(item => {
                                        return (
                                            <div className='f-sb-c'>
                                                <div>
                                                    <StyledImage src={imagePath500 + item.profile_path} alt={item.name} />
                                                </div>
                                                <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', marginRight:'100px'}}>
                                                    <p style={{fontWeight:'bold'}}>{item.name}</p>
                                                    <p>{item.character}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='f-sb-r' style={{alignItems:'start', width: '90%'}}>
                        <div style={{width: '70%'}}>
                            {/* Media */}
                            <p className='f-w-600'>Media</p>
                            <p className='m-l-10'>Videos</p>
                            {props.movieVideos && props.movieVideos.results && props.movieVideos.results.length > 0 &&
                                props.movieVideos.results.map(item => {
                                    return (
                                        item.site === 'YouTube' &&
                                        <a href={'https://www.youtube.com/watch?v='+item.key} className='m-l-10'>Youtube trailer link</a>
                                    )
                                })
                            }
                        </div>
                        <div style={{width:'30%', marginRight:'20px'}}>
                            {/* Keyowords */}
                            <p className='f-w-600'>Keywords</p>
                            <div style={{display:'grid', gridTemplateColumns: 'repeat(2,1fr)'}}>
                                {props.movieKeywords && props.movieKeywords.keywords && props.movieKeywords.keywords.length > 0 && 
                                    props.movieKeywords.keywords.slice(0,15).map(item => {
                                        return (
                                            <div className='flex-center-r' style={{backgroundColor:'#f7f7f7', margin: '2px', borderRadius:'10px', padding:'2% 0 1% 0'}}>
                                                <p style={{margin:0}}>{item.name}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div style={{marginTop:'50px'}}>
                        {/* Recommendations */}
                        <p className='f-w-600'>Recommendations</p>
                        {props && props.similarMovies && props.similarMovies.results?.length > 0 &&
                            <div className='f-sb-r' style={{width:'90%'}}>
                                {props.similarMovies.results.slice(0,3).map(item => {
                                    return (
                                        <div className='f-sb-c' style={{alignItems:'flex-start'}}>
                                            <div>
                                                <StyledBannerImage src={imagePath500 + item.backdrop_path} alt={item.title} isRecommendation={true} />
                                            </div>
                                            <div>
                                                <p className='f-w-600'>{item.title}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        }
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        movieDetail : state.movieDetail,
        movieCredits: state.movieCredits,
        movieVideos: state.movieVideos,
        similarMovies: state.similarMovies,
        movieKeywords: state.keywords,
    }
}

export default connect(mapStateToProps, null)(MovieDetail)
