import React from 'react'
import PropTypes from 'prop-types'
import Board from '../../components/Board/Board'

//clockwise directions
const dirs = [
  [0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]
]

const generateBoard = (size,colors) => {
  var newBoard = new Array(size);
  for (let i = 0; i < size; i++){
    newBoard[i] = new Array(size);
    for (let j = 0; j < size; j++){
      newBoard[i][j] = {
        color: 0, //Math.floor(Math.random()*(colors)),
        orient: 0 //Math.floor(Math.random()*(2))     -- Diagonal points
      }
    }
  }
  let i = 0;
  while (i < size*size || checkBoard(newBoard)){
    let x = Math.floor(Math.random()*(size));
    let y = Math.floor(Math.random()*(size));
    recolorPoint(newBoard,colors,x,y,true);
    i++;
  }
  return newBoard;
}
const recolorPoint = (board, colors, gx, gy, positive) => {
  const size = board[0].length
  board[gx][gy].color = (board[gx][gy].color + (positive ? 1 : colors - 1)) % colors;
  for (let i = 0; i < dirs.length; i++){
    let x = gx, y = gy;
    //0 - rook, 1 - bishop
    if (i % 2 === board[gx][gy].orient % 2) {
      while ((x + dirs[i][0] >= 0)  && (x + dirs[i][0] < size) && (y + dirs[i][1] >= 0)  && (y + dirs[i][1] < size)){
        x += dirs[i][0];
        y += dirs[i][1];
        board[x][y].color = (board[x][y].color + (positive ? 1 : colors - 1)) % colors;
      }
    }
  }
  return board
}

const checkBoard = (board) => {
  const size = board[0].length
  for (let i = 0; i < size; i++){
    for (let j = 0; j < size; j++){
      if (board[i][j].color !== board[0][0].color) {
        return false
      }
    }
  }
  return true
}

class BoardContainer extends React.Component {
  state = {
    board: generateBoard(this.props.size,this.props.colors),
    locked: false
  }
  handleClick = this.handleClick.bind(this);

  shouldComponentUpdate(nextProps){
    if (this.props.startTime !== nextProps.startTime || 
      nextProps.size !== this.props.size || 
      nextProps.colors !== this.props.colors){
      this.setState({
        board: generateBoard(nextProps.size,nextProps.colors),
        locked: false
      })
      return false
    }
    return true
  }
  componentDidUpdate(){
    if (!this.state.locked){
      if (checkBoard(this.state.board)){
        this.props.finishGame();
        this.setState({locked: true})
      } 
    }
  }

  handleClick(x,y,positive){
    if (!this.state.locked){
      let board = [...this.state.board]
      recolorPoint(board,this.props.colors, x,y,positive);
      this.setState({board: board})
    }
  }
   
  render(){
    return <Board
      handleClick={this.handleClick}
      board={this.state.board}
      size={this.props.size}
    />
  }
}

BoardContainer.propTypes = {
  finishGame: PropTypes.func.isRequired,
  startTime: PropTypes.number.isRequired,
  colors: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired
}


export default BoardContainer