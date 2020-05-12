import React from 'react';
import './CurrentTime.scss';

class CurrentTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div className="clock">{this.state.date.toLocaleTimeString('en-US', { timeZone: this.props.timeZone })}</div>
    );
  }
}

export default CurrentTime;
