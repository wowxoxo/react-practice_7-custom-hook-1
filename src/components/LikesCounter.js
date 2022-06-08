import { Component } from 'react'

const LikesCounterWrapper = CounterComponent => {
  class LikesCounter extends Component {
  

    render() {
      return <div> 👍 <CounterComponent theme="green" /></div>
    }
  
  }

  return LikesCounter
}

export default LikesCounterWrapper