import React, { } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTimer, deleteTimer } from '../actions'
import { formatTime } from '../utils';

import './TimerView.css'

export default function TimerView(props) {
  const { index, timer } = props
  const dispatch = useDispatch()
  const buttonClass = timer.isRunning ? "stop" : "start";

  return (
    <div className="TimerView">
      <h2>{timer.name}</h2>
      <h3>{timer.desc}</h3>
      <h1>{formatTime(timer.time)}</h1>
      <button className={`timer-view__button timer-view__button--${buttonClass}`}
        onClick={() => dispatch(toggleTimer(index))}>
        {timer.isRunning ? "Stop" : "Start"}
      </button>
      <button className="delete" onClick={() => dispatch(deleteTimer(index))}>Delete</button>
    </div>
  )
}


    

    