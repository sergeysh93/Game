import React from 'react'
import PropTypes from 'prop-types'
import './Timer.css'

const Timer = (props) => {
  const t = props.timer;
  var formattedTime = (t.h>0 ? t.h+'h ' : '') + 
  (t.m>0 ? t.m+'m ' : '') +
  t.s + '.'+ t.ms + 's'

  return (
    <div className='container-fluid'>
      <div className='timer'>
        Time: {formattedTime}
      </div>
    </div>
  )
}

Timer.propTypes = {
  timer: PropTypes.shape({
    h: PropTypes.number.isRequired,
    m: PropTypes.number.isRequired,
    s: PropTypes.number.isRequired,
    ms: PropTypes.number.isRequired
  }
  ).isRequired,
}

export default Timer