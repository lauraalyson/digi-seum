// Show all artwork
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { indexArtwork } from '../../api/artwork'
import Museum from '../gallery/Museum'
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
        <li className='artwork-gallery' key={artwork._id}>
          <Link to={`/artworks/${artwork._id}`}><h3></h3>
            {artwork.title}
            <br />
            <img className='gallery-zoom' src={artwork.img}/>
          </Link>
        </li>
      ))
    }

    return (
      <>
        <h3>Creations</h3>
        <p>{artworkJsx}</p>
        <Museum />
      </>
    )
  }
}

export default IndexArtwork
