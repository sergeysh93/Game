import React from 'react';
import PropTypes from 'prop-types'
import Contols from '../../components/Controls/Controls'
import {MAX_LEVEL} from '../../Consts'

class ControlsContainer extends React.Component {
  state = {
    // leaderboard, rules, diff
    curCategory: 'controls2'
  }
  handleStart = this.handleStart.bind(this)
  handleLevelChange = this.handleLevelChange.bind(this)
  handleCategoryClick = this.handleCategoryClick.bind(this)
  
  getLeaderboard(){

  }
  updateLeaderboard(){

  }
  handleStart(){
    this.props.startGame(this.props.level)
  }
  handleCategoryClick(e){
    console.log(e.target.id);
    this.setState({
      curCategory: this.state.curCategory === e.target.id ? '' : e.target.id
    })
  }
  handleLevelChange(e){
    const level = parseInt(e.target.value, 10)
    if (isNaN(level)){
      return
    }
    if (level > 0 && level <= MAX_LEVEL){
      this.props.startGame(e.target.value)
    }
  }
  render(){
    return <Contols 
      handleCategoryClick={this.handleCategoryClick}
      handleStart={this.handleStart}
      handleLevelChange={this.handleLevelChange}
      level={this.props.level}
      curCategory={this.state.curCategory}
    />
  }
}

ControlsContainer.propTypes = {
  startGame: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired
}

export default ControlsContainer