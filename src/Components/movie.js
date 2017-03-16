import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import MovieData from './../config.json';

var rightNow = moment();
var movieName = MovieData.movie_name;
var movieDate = MovieData.date;



export default class Movie extends React.Component {
  render() {
    return (
      <div>
        <h1>Can I go see {movieName} yet?</h1>
        <h1>No. Wonder Woman will arrive to save us on: { movieDate }</h1>
      </div>
    );
  }
}
