import React from 'react';
import './App.css';
import ControlsContainer from './containers/Controls/Controls';
import BoardContainer from './containers/Board/Board';
import TimerContainer from './containers/Timer/Timer'
import {DEFAULT_SIZE,DEFAULT_COLORS,MAX_COLORS,MAX_SIZE} from './Consts'


class App extends React.Component {
  state = {
    level: (DEFAULT_COLORS - 2) * DEFAULT_SIZE + DEFAULT_COLORS - 1, 
    size: DEFAULT_SIZE,
    colors: DEFAULT_COLORS,
    inProgress: true,
    startTime: Date.now()
  }
  startGame = this.startGame.bind(this)
  finishGame = this.finishGame.bind(this)
  
  startGame(level){
    this.setState({
      level: level,
      size: Math.floor((level-1) / (MAX_COLORS - 1)) + 3,
      colors: (level-1) % (MAX_COLORS - 1) + 2,
      inProgress: true,
      startTime: Date.now()
    })
  }

  finishGame(){
    this.setState({inProgress: false})
  }
  render(){
    const size = this.state.size < MAX_SIZE ? this.state.size : MAX_SIZE
    const colors = this.state.colors < MAX_COLORS ? this.state.colors : MAX_COLORS
    return (
    <div className="App">
      <ControlsContainer
        startGame={this.startGame}
        level={this.state.level}
      />
      <TimerContainer 
        start={this.state.startTime}
        freeze={!this.state.inProgress}
      />
      <BoardContainer
        finishGame={this.finishGame}
        startTime={this.state.startTime}
        colors={colors}
        size={size}
      />
    </div>
    );
  }
}

export default App;
