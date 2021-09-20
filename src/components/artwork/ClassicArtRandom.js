import React, { Component } from 'react'
import '../../index.scss'

class ClassicArtRandom extends Component {
  constructor (props) {
    super(props)

    this.state = {
      randomImg: ''
    }

    const imgOptions = {
      one: 'https://assets.vogue.com/photos/5dc9ad8d12f8b9000993012e/master/w_2560%2Cc_limit/61041127%252520(1).jpg',
      two: 'https://assets.vogue.com/photos/5dc9ad8d12f8b9000993012e/master/w_2560%2Cc_limit/61041127%252520(1).jpg'
    }

    this.setState({ randomImg: imgOptions })
  }

  render () {
    return (
      <>
        <img src={this.state.randomImg}/>
        <img className='randomImg' src='https://assets.vogue.com/photos/5dc9ad8d12f8b9000993012e/master/w_2560%2Cc_limit/61041127%252520(1).jpg' />
      </>
    )
  }
}
export default ClassicArtRandom
