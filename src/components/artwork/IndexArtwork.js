// Show all artwork
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { indexArtwork } from '../../api/artwork'
import './../../index.scss'

class IndexArtwork extends Component {
  constructor (props) {
    super(props)

    this.state = {
      artworks: []
    }
  }

  componentDidMount () {
    const { user } = this.props
    indexArtwork(user)
      .then((res) => {
        this.setState({ artworks: res.data.artworks })
      })
  }

  render (res) {
    const { artworks } = this.state

    let artworkJsx
    if (artworks.length === 0) {
      artworkJsx = 'Create some artwork!'
    } else {
      artworkJsx = artworks.map((artwork) => (
        <div style={{ textAlign: 'center', display: 'flex' }} key={artwork._id}>
          <Link style={{ textDecoration: 'none', textTransform: 'uppercase' }}className='artwork-gallery' to={`/artworks/${artwork._id}`}>
            <img style={{ borderRadius: '20px', margin: '15px px', maxWidth: '250px' }}className='gallery-zoom' src={artwork.img} />
            <h3>{artwork.title}</h3>
          </Link>
        </div>
      ))
    }

    return (
      <Fragment>
        <h3 style={{ textAlign: 'center', fontSize: '2em', margin: '40px 0px' }}>Welcome to your own<br/>digital museum.</h3>
        <div className='d-flex justify-content-center'>{artworkJsx}</div>
      </Fragment>
    )
  }
}

export default IndexArtwork
