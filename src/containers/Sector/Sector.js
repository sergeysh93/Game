import React from 'react'
import PropTypes from 'prop-types'
import Sector from '../../components/Sector/Sector'

class SectorContainer extends React.Component {

  clickHandler = this.clickHandler.bind(this);

  shouldComponentUpdate(nextProps){
    return (this.props.color !== nextProps.color ||
      this.props.orient !== nextProps.orient ||
      this.props.size !== nextProps.size
      )
  }
  clickHandler(e){
    if (e.nativeEvent.which === 1) {
      this.props.handleClick(this.props.x, this.props.y, true)
    } else if (e.nativeEvent.which === 3) {
      this.props.handleClick(this.props.x, this.props.y, false)
    }
    e.preventDefault()
  }
  render(){
    return <Sector 
      handleClick={this.clickHandler}
      color={this.props.color}
      orient={this.props.orient}
      size={this.props.size}
    />
  }
}

SectorContainer.propTypes = {
  handleClick: PropTypes.func.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  color: PropTypes.number.isRequired,
  orient: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired
}
export default SectorContainer