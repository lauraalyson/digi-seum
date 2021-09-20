import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import '../../index.scss'
import { getRandomArtwork } from '../../api/artwork'

class ClassicArtRandom extends Component {
  constructor (props) {
    super(props)

    this.state = {
      randomImg: 'https://assets.vogue.com/photos/5dc9ad8d12f8b9000993012e/master/w_2560%2Cc_limit/61041127%252520(1).jpg',
      artistBio: 'Signed and dated ‘Dalí 1953’ (lower center)',
      artist: 'Salvador Dalí',
      title: 'Femmes aux Papillons'
    }
  }

    getData = (event) => {
      getRandomArtwork('/436009')
        .then((res) => this.setState({
          randomImg: res.data.primaryImage,
          artistBio: res.data.artistDisplayBio,
          title: res.data.title,
          artist: res.data.artistDisplayName
        }))
    }

    render () {
      const { randomImg, artist, artistBio, title } = this.state
      return (
        <>
          <img src={randomImg}/>
          <h3>{title}</h3>
          <p>{artist}, <i>{artistBio}</i></p>
          <Button onClick={this.getData} className='button-custom primary'>Get Inspired</Button><br />
        </>
      )
    }
}
export default ClassicArtRandom
