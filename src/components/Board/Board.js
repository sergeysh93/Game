import React from 'react'
import PropTypes from 'prop-types'
import SectorContainer from '../../containers/Sector/Sector'

import './Board.css'
const Board = (props) => {
    const {size, board} = props
    var toRender = [];
    for (let i = 0; i < size; i++){
      for (let j = 0; j < size; j++){
        toRender.push(
        <SectorContainer 
          key={i*size+j}
          handleClick={props.handleClick}
          x={i}
          y={j}
          color={board[i][j].color}
          orient={board[i][j].orient}
          size={size}
        />
        )
      }
    }
    return (
    <div className='container board'>
      {toRender}
    </div>
  )
}
Board.propTypes = {
  handleClick: PropTypes.func.isRequired,
  board: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        color: PropTypes.number.isRequired,
        orient: PropTypes.number.isRequired
      }
      )
    )
  ).isRequired,
  size: PropTypes.number.isRequired
}


export default Board