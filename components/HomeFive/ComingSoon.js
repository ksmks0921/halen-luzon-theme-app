import React, { Component } from "react";
// @ts-ignore
import Link from "next/link";

class ComingSoon extends Component {
  state = {
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  };

  commingSoonTime = () => {
    let endTime = new Date("January 1, 2024 00:00:00 PDT");   
    // @ts-ignore
    let endTimeParse = Date.parse(endTime) / 1000;
    let now = new Date();
    // @ts-ignore
    let nowParse = Date.parse(now) / 1000;
    let timeLeft = endTimeParse - nowParse;
    let days = Math.floor(timeLeft / 86400);
    let hours = Math.floor((timeLeft - days * 86400) / 3600);
    let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    let seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );
    // @ts-ignore
    if (hours < "10") {
      // @ts-ignore
      hours = "0" + hours;
    }
    // @ts-ignore
    if (minutes < "10") {
      // @ts-ignore
      minutes = "0" + minutes;
    }
    // @ts-ignore
    if (seconds < "10") {
      // @ts-ignore
      seconds = "0" + seconds;
    }
    this.setState({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.commingSoonTime();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="coming-soon-area-2">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="coming-soon-content-2">
                <h1>Halen Will Be Arriving In</h1>
                <br />
                <div id="timer">
                  <div id="days">
                    {this.state.days}
                    <span>Days</span>
                  </div>
                  <div id="hours">
                    {this.state.hours}<span>Hours</span>
                  </div>
                  <div id="minutes">
                    {this.state.minutes}<span>Minutes</span>
                  </div>
                  <div id="seconds">
                    {this.state.seconds}<span>Seconds</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComingSoon;
