import { React, Component } from 'react'
import './../../index.scss'
class MuseumGoer extends Component {
  constructor (props) {
    super(props)
    this.style = {
      position: 'absolute',
      transition: 'all 1s ease'
      // display: 'inline-block'
    }
  }

  render () {
    const { x, y } = this.props.position
    return (
      <span style={{ ...this.style, top: `${y}px`, left: `${x}px` }}>
        <img className='museum-goer' src='https://media.giphy.com/media/VcvtuKWp1ySrISx7U7/giphy.gif' />
      </span>
    )
  }
}

export default MuseumGoer
