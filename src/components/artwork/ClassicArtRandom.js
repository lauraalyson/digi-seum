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

    imgId = [436009, 436530, 435809, 436918, 437382, 435884, 437755, 438144, 436484, 436533, 828241, 437977, 436572, 10809, 437316, 435864, 436904, 12544]

    randomImgId = this.imgId[0]

    getData = (event) => {
      getRandomArtwork(`/${this.randomImgId}`)
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
          <br /><br />
          <div className='random-historic-img-text'>
            <h4>{title}</h4>
            <p>{artist}, <i>{artistBio}</i></p>
          </div>
          <Button onClick={this.getData} className='button-custom primary'>Get Inspired</Button><br />
        </>
      )
    }
}
export default ClassicArtRandom
