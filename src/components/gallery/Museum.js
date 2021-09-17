import { React, Component } from 'react'
// import { withRouter } from 'react-router-dom'
import MuseumGoer from './MuseumGoer'

class Museum extends Component {
  constructor (props) {
    super(props)
    this.style = {
      fontSize: '75px',
      width: '100vw',
      height: '100vh',
      position: 'absolute'
    }
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      x: 0,
      y: 0
    }
  }

  handleClick (event) {
    const x = event.nativeEvent.clientX
    const y = event.nativeEvent.clientY
    console.log('This is event.native event', event.nativeEvent)
    console.log('this is x: ', x)
    console.log('this is y: ', y)
    this.setState({ x, y })
  }

  render () {
    console.log('this.state x and y; ', this.state.x, this.state.y)

    return (
      <div
        style={this.style}
        onClick={this.handleClick}
      >
        <MuseumGoer
          position={{ x: this.state.x, y: this.state.y }}
        />
      </div>
    )
  }
}

export default Museum
// ReactDOM.render(
//   <GameBoard />,
//   document.querySelector('#root')
// )
