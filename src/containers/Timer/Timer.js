import React from 'react'
import PropTypes from 'prop-types'
import Timer from '../../components/Timer/Timer'

class TimerContainer extends React.Component {
  state = {
    time: this.curTimer(),
  }
  curTimer(){
    let t = Date.now() - this.props.start
    let obj = {
      h:  Math.floor(t / 3600000),
      m:  Math.floor((t % 3600000) / 60000),
      s:  Math.floor((t % 60000) / 1000),
      ms: Math.floor((t % 1000)/100)
    }
    return obj
  }
  startTimer(){
    this.timerID = setInterval(
      () => this.tick(),
      100
    );
  }
  stopTimer(){
    clearInterval(this.timerID)
  }
  componentDidMount(){
    this.startTimer()
  }
  tick() {
    this.setState({
      time: this.curTimer()
    });
  }

  shouldComponentUpdate(nextProps,nextState){
    if (nextProps.freeze) {
      this.stopTimer()
    }
    if (this.props.freeze && !nextProps.freeze){
      this.startTimer()
    }
    return !nextProps.freeze
  }
  render(){
    //console.log('render', this.state, this.props);
    
    return <Timer 
      timer={this.state.time}
    />
  }
}

TimerContainer.propTypes = {
  start: PropTypes.number.isRequired,
  freeze: PropTypes.bool.isRequired
}

export default TimerContainer