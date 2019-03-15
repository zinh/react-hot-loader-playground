import React from 'react'
import { connect } from 'react-redux'

import Counter from './Counter'

var Change = ({counterCount, increaseCount}) => {
  return (
    <div>
      Current count: {counterCount}
      <button onClick={(evt) => increaseCount()}>+</button>
  </div>
  )
}

Change = connect(
  state => ({counterCount: state.counterCount}), 
  dispatch => ({increaseCount: () => dispatch({type: 'INCREASE'})})
)(Change)

export default Change
