import React from "react";
import { connect } from "react-redux";
import MovieDetail from "../Components/MovieDetail/MovieDetail";
import MoviesSection from "../Components/MoviesSection/MoviesSection";
import Nav from "../Components/Nav/Nav";
import SearchBlock from "../Components/SearchBlock/SearchBlock";

const CiniBuzz = (props) => {
  return (
    <div>
      <Nav />
      {props && !props.showMovieDetail ? 
      <>
        <SearchBlock />
        <MoviesSection />
      </>
      :
      <>
        <MovieDetail />
      </>}
    </div>
  );
};

const mapStateToProps = state => {
    return {
        showMovieDetail: state.showMovieDetail
    };
}

export default connect(mapStateToProps, null)(CiniBuzz);
