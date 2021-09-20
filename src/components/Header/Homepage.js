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
          <h1>Welcome to your digital <img className='homepage-graphics' src='https://media.giphy.com/media/7NJ00BlsdGYUNgR4Zp/giphy.gif' /> museum. Transform history <img className='homepage-graphics' src='https://media.giphy.com/media/jsfXMQV3stAve3RBRr/giphy.gif' /> into today. <img className='homepage-graphics' src='https:////media.giphy.com/media/1Ag2C8C6EEk5mXOrQt/giphy.gif' /> The world is your digital oyster <img className='homepage-graphics' src='https://media.giphy.com/media/Th9joxf9NMIi8DKUeJ/giphy.gif' />.</h1>
        </div>
      </div>
    )
  }
}

export default withRouter(Homepage)
