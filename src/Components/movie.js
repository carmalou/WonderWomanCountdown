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

export default class Movie extends React.Component {
  constructor() {
    super();

    this.state = {
      howMuchLonger: null
    };
  }

  componentDidMount() {
    // for some stupid reason the arrow function preserves the correct scope, but tradition function calls don't. WTF
    setInterval(
      () =>
        this.seeminglyUselessWrapper(),
        1000
      );
  }

  countdownToWorldSaving() {
    var tmpHowMuchLonger = moment(momentMovieDate).countdown().toString();
    tmpHowMuchLonger = 'You can go see Wonder Woman in: ' + tmpHowMuchLonger;
    return tmpHowMuchLonger;
  }

  seeminglyUselessWrapper() {
    this.setState({howMuchLonger: this.countdownToWorldSaving()});
  }

  render() {
    return (
      <div>
        <h1>Can I go see {movieName} yet?</h1>
        <h1>{yesOrNo}. {secondaryText}</h1>
        <h1>{this.state.howMuchLonger}</h1>
      </div>
    );
  }
}
