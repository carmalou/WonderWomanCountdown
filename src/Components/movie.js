import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import countdown from 'countdown';
import momentCountdown from 'moment-countdown';
import MovieData from './../config.json';

var rightNow = moment().format();
var movieName = MovieData.movie_name;
var movieDate = MovieData.date;
var momentMovieDate = moment(movieDate).format();
var waitingForWonderWoman = moment(rightNow).isAfter(momentMovieDate);
var yesOrNo = waitingForWonderWoman ? 'No' : 'Yes';
var secondaryText = waitingForWonderWoman ? 'Wonder Woman will arrive to save us on: ' + movieDate : 'What are you waiting for? <a href="#">Buy a ticket!</a>';
var howMuchLonger = 'lskdjfs';

function countdownToWorldSaving() {
  console.log('countdownToWorldSaving');
  howMuchLonger = moment(momentMovieDate).countdown().toString();
  howMuchLonger = 'You can go see Wonder Woman in: ' + howMuchLonger;
  console.log('howMuchLonger ', howMuchLonger);
}

window.setInterval(countdownToWorldSaving, 1000);
countdownToWorldSaving().bind(this);

export default class Movie extends React.Component {
  render() {
    return (
      <div>
        <h1>Can I go see {movieName} yet?</h1>
        <h1>{yesOrNo}. {secondaryText}</h1>
      </div>
    );
  }
}
