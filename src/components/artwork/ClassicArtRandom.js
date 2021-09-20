import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import '../../index.scss'
import { getRandomArtwork } from '../../api/artwork'

class ClassicArtRandom extends Component {
  constructor (props) {
    super(props)

    this.state = {
      randomImg: ''
    }
  }

    getData = (event) => {
      getRandomArtwork()
        .then(
          console.log((res) => console.log('This is the response from the get request: \n', res))
        )
    }

    render () {
      return (
        <>
          {/* <Button onSubmit={this.getData}>Submit</Button> */}
          <Button className='custom-button primary'>Get Image</Button><br />
          <img src={this.state.randomImg}/>
          <img className='randomImg' src='https://assets.vogue.com/photos/5dc9ad8d12f8b9000993012e/master/w_2560%2Cc_limit/61041127%252520(1).jpg' />
          <p>
        Salvador Dalí (1904–1989) <br />
        Femmes aux Papillons, signed and dated ‘Dalí 1953’ (lower center)
          </p>
        </>
      )
    }
}
export default ClassicArtRandom
