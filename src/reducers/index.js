import { combineReducers } from 'redux'

const counterCount = (state = 0, action) => {
  switch(action.type){
    case 'INCREASE':
      return state + 1
    case 'DECREASE':
      if (state > 0){
        return state - 1
      } else {
        return 0
      }
    default:
      return state
  }
}

const Reducer = combineReducers({
  counterCount
})

export default Reducer
