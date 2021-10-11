import { React, Component } from 'react'
import { withRouter } from 'react-router'
import './../../index.scss'

class Homepage extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <div>
        <div className='homepage-main'>
          <h1>Welcome <img className='homepage-graphics' src='https:////media.giphy.com/media/1Ag2C8C6EEk5mXOrQt/giphy.gif' /> to Digi-seum. Transform <img className='homepage-graphics' src='https://media.giphy.com/media/LQj5vCbXU8Fx1hjOUS/giphy.gif' /> historic <img className='homepage-graphics' src='https://media.giphy.com/media/7NJ00BlsdGYUNgR4Zp/giphy.gif' /> artwork into a masterpiece <img className='homepage-graphics' src='https://media.giphy.com/media/jsfXMQV3stAve3RBRr/giphy.gif' /> of today. The world is your <span style={{ fontSize: '.4em' }}>(digital)</span>  oyster <img className='homepage-graphics' src='https://media.giphy.com/media/Th9joxf9NMIi8DKUeJ/giphy.gif' />.</h1>
        </div>
      </div>
    )
  }
}

export default withRouter(Homepage)
