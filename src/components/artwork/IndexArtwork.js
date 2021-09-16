// Show all artwork
import React, { Component } from 'react'
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
    const { user, artworks } = this.props
    console.log('This is artwork in component did mount: \n', artworks)
    indexArtwork(user)
      .then((res) => {
        this.setState({ artworks: res.data.artworks })
      })
  }

  render (res) {
    const { artworks } = this.state
    console.log('this is artwork in index \n', artworks)
    console.log('This is this.state in index: \n', this.state)

    let artworkJsx
    if (artworks.length === 0) {
      artworkJsx = 'Create some artwork!'
    } else {
      artworkJsx = artworks.map((artwork) => (
        <li key={artwork._id}>
          <Link to={`/artworks/${artwork._id}`}>
            {artwork.title}
            <br />
            <img src={artwork.img}/>
          </Link>
        </li>
      ))
    }

    return (
      <>
        <h3>Creations</h3>
        <p>{artworkJsx}</p>
      </>
    )
  }
}

export default IndexArtwork
