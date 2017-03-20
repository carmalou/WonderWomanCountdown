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
      howMuchLonger: 'pineapple'
    };
  }

  componentDidMount() {
    console.log('didmount this ', this);
    console.log('countdown ', this.countdownToWorldSaving);
    console.log('uselesswrapper ', this.seeminglyUselessWrapper);
    setInterval(this.seeminglyUselessWrapper, 1000);
  }

  countdownToWorldSaving() {
    console.log('countdownToWorldSaving');
    var tmpHowMuchLonger = moment(momentMovieDate).countdown().toString();
    tmpHowMuchLonger = 'You can go see Wonder Woman in: ' + tmpHowMuchLonger;
    console.log('howMuchLonger ', tmpHowMuchLonger);
    return tmpHowMuchLonger;
  }.bind(this);

  seeminglyUselessWrapper(componentScope) {
    var that = componentScope;
    console.log('this ', this);
    console.log('is this even being called');
    console.log('countdownToWorldSaving ', this.countdownToWorldSaving);
    // this.setState({howMuchLonger: this.countdownToWorldSaving()});
    console.log('this.setState within Component ', this.setState);
    console.log(this.countdownToWorldSaving()); // why is this undefined??
  }.bind(this);

  render() {
    console.log('this ', this);
    console.log('this.state ', this.state);
    console.log('this.setState ', this.setState);

    return (
      <div>
        <h1>Can I go see {movieName} yet?</h1>
        <h1>{yesOrNo}. {secondaryText}</h1>
        <h1>{this.state.howMuchLonger}</h1>
      </div>
    );
  }
}
