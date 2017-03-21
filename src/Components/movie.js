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
var waitingForWonderWoman = moment(rightNow).isBefore(momentMovieDate);
var yesOrNo = waitingForWonderWoman ? 'Yes' : 'No';

export default class Movie extends React.Component {
  constructor() {
    super();

    this.state = {
      howMuchLonger: null
    };

    this.countdownToWorldSaving = this.countdownToWorldSaving.bind(this);
  }

  componentDidMount() {
    setInterval(this.countdownToWorldSaving, 1000);
  }

  countdownToWorldSaving() {
    if(yesOrNo == 'No') {
      this.setState({howMuchLonger: 'right now!'});
      return;
    }
    var tmpHowMuchLonger = moment(momentMovieDate).countdown().toString();
    this.setState({howMuchLonger: 'in ' + tmpHowMuchLonger});
  }

  render() {
    return (
      <div className="parent-div center-align">
        <div className="center-align">
          <h1 className="App">Can I go see {movieName} yet?</h1>
          <h1 className="App">{yesOrNo}. <a href="http://www.fandango.com/wonderwoman_191725/movietimes" target="_blank">Get your ticket now.</a></h1>
          <h1 className="App">You can go see Wonder Woman {this.state.howMuchLonger}</h1>
        </div>
      </div>
    );
  }
}
