// Update and Delete Artwork
import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
// API request
import { showArtwork, deleteArtwork } from '../../api/artwork'
import Button from 'react-bootstrap/Button'

class ShowArtwork extends Component {
  constructor (props) {
    super(props)

    this.state = {
      artwork: ''
    }
  }

  componentDidMount () {
    const { match, user } = this.props

    showArtwork(match.params.id, user)
      .then((res) => this.setState({ artwork: res.data.artwork }))
      .then((res) => console.log('This is the response from index artwork \n', res))
      .catch((err) => console.log(err))
  }

handleDelete = (event) => {
  const { match, user, history } = this.props
  deleteArtwork(match.params.id, user)
    .then(() => history.push('/artworks'))
    .catch((err) => console.log(err))
}

render () {
  const { artwork } = this.state
  const { user } = this.props

  return (
    <Fragment>
      <h3>Artwork:</h3>
      <h5>{artwork.title}</h5>
      <p>{artwork.description}</p>
      <img src={artwork.img} />
      {user._id === artwork.owner && (
        <>
          <br />
          <Button onClick={this.handleDelete}>Delete</Button>
          <Button onClick={this.handleUpdate}>Update</Button>
        </>
      )}
    </Fragment>
  )
}
}

export default withRouter(ShowArtwork)
