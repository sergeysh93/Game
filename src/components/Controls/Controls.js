import React from 'react';
import PropTypes from 'prop-types'
import './Controls.css';
import {MAX_LEVEL} from '../../Consts'

const Controls = (props) => {
  const ruleTextEng = 
    <div>
      Clicking on a square recolors all squares on it's horizontal and vertical lanes. Goal is to make all squares the same colored.
    </div>
    const ruleText = 
    <div>
      Клик по каждому квадрату перекрашивает все клетки, находящиеся на одной горизонтальной или вертикальной линии с ним. Задача - покрасить всё поле в один цвет
    </div>
  const inputs = 
    <form>
      <label>Уровень:</label>
      <input className='controls-content__input' onChange={props.handleLevelChange} type="number" name="level" value={props.level} title={'1 - '+ MAX_LEVEL}/>
      <input className='controls-content__input' onChange={props.handleLevelChange} type="range" name="level" min="1" max={MAX_LEVEL} step="1" value={props.level} title={'1 - '+ MAX_LEVEL}/>
    </form>
  const leaderboard = 
    <div className='leaderboard'>
      placeholder
    </div>
  
  return (
    <>
      <div className='container controls'>
        <ul className='row list-group list-group-horizontal controls-list'>
          <li className={'col-12 col-md-3 list-group-item'+ (props.curCategory === 'controls0' ? ' active' : '')} id='controls0' onClick={props.handleStart}>Новая игра</li>
          <li className={'col-12 col-md-3 list-group-item'+ (props.curCategory === 'controls1' ? ' active' : '')} id='controls1' onClick={props.handleCategoryClick}>Таблица лидеров</li>
          <li className={'col-12 col-md-3 list-group-item'+ (props.curCategory === 'controls2' ? ' active' : '')} id='controls2' onClick={props.handleCategoryClick}>Правила</li>
          <li className={'col-12 col-md-3 list-group-item'+ (props.curCategory === 'controls3' ? ' active' : '')} id='controls3' onClick={props.handleCategoryClick}>Сложность</li>
        </ul>
      </div>
      {props.curCategory !== '' && 
        <div className='controls-content'>
          {props.curCategory === 'controls1' && leaderboard}
          {props.curCategory === 'controls2' && ruleText}
          {props.curCategory === 'controls3' && inputs}
        </div>
      }
    </>
  )
}

Controls.propTypes = {
  handleCategoryClick: PropTypes.func.isRequired,
  handleStart: PropTypes.func.isRequired,
  handleLevelChange: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
  curCategory: PropTypes.string.isRequired
}

export default Controls