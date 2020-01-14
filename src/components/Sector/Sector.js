import React from 'react'
import PropTypes from 'prop-types'
import './Sector.css'
/*
orient:0

**0**
**0**
00000
**0**
**0**

orient:1

0***0
*0*0*
**0**
*0*0*
0***0

*/

const colors = {
  0: '#A43D94',
  1: '#717DD7',
  2: '#00B945',
  3: 'blue',
  4: 'purple'
}


const Sector = (props) => {
    const style = {
      backgroundColor: colors[props.color],
      width: (100/props.size)+'%',
      height: (100/props.size)+'%'
    }
    return (
    <div className='sector'onClick={props.handleClick} onContextMenu={props.handleClick} style={style}></div>
  )
}

Sector.propTypes = {
  handleClick: PropTypes.func.isRequired,
  color: PropTypes.number.isRequired,
  orient: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired
}

export default Sector