import React from 'react'
import { connect } from 'react-redux'

class Counter extends React.Component {
  constructor(props){
    super(props)
    this.state = { count: 0 }
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState(prevState => ({ count: prevState.count + 1 })),
      200,
    )
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return <div>{this.state.count}</div>
  }
}

Counter = connect(state => ({counterCount: state.counterCount}))(Counter)

export default Counter
