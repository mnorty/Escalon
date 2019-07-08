import React, { Component } from 'react';

class TimerCountDown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timerOn: false,
            timerStart: 0,
            timerTime: 3000
        }
    }
    componentDidMount() {
        this.startTimer();
    }

    startTimer = () => {
        this.setState({
          timerOn: true,
          timerTime: this.state.timerTime,
          timerStart: this.state.timerTime
        });
        this.timer = setInterval(() => {
          const newTime = this.state.timerTime - 10;
          if (newTime >= 0) {
            this.setState({
              timerTime: newTime
            });
          } else {
            clearInterval(this.timer);
            this.setState({ timerOn: false });
            alert("Countdown ended");
          }
        }, 10);
      };

    render() {
        const { timerTime } = this.state;
        return (
            <div>
                <h1>{timerTime}</h1>
            </div>
        )
    }
}

export default TimerCountDown;