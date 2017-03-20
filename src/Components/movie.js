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

function countdownToWorldSaving() {
  console.log('countdownToWorldSaving');
  var tmpHowMuchLonger = moment(momentMovieDate).countdown().toString();
  tmpHowMuchLonger = 'You can go see Wonder Woman in: ' + tmpHowMuchLonger;
  console.log('howMuchLonger ', tmpHowMuchLonger);
  return tmpHowMuchLonger;
}

export default class Movie extends React.Component {
  constructor() {
    super();

    this.state = {
      howMuchLonger: 'pineapple'
    };
  }

  render() {
    console.log('this ', this);
    console.log('this.state ', this.state);
    console.log('this.setState ', this.setState);

    function seeminglyUselessWrapper() {
      // this.setState({howMuchLonger: countdownToWorldSaving()});
      console.log(countdownToWorldSaving());
    }

    window.setInterval(seeminglyUselessWrapper, 1000);
    return (
      <div>
        <h1>Can I go see {movieName} yet?</h1>
        <h1>{yesOrNo}. {secondaryText}</h1>
        <h1>{this.state.howMuchLonger}</h1>
      </div>
    );
  }
}
