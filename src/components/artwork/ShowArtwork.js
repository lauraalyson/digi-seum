// Show, Delete, and Edit Button Artwork
import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

// API calls
import { updateArtwork, showArtwork, deleteArtwork } from '../../api/artwork'

// Bootstrap imports
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class ShowArtwork extends Component {
  constructor (props) {
    super(props)

    this.state = {
      artwork: '',
      updateArt: {
        title: '',
        description: '',
        img: '',
        show: false
      }
    }
  }

  componentDidMount () {
    const { match, user } = this.props

    showArtwork(match.params.id, user)
      .then((res) => this.setState({ artwork: res.data.artwork }))
      .then((res) => console.log('This is the response from index artwork \n', res))
      .catch((err) => console.log(err))
  }

// Popup modal open and close
handleClose = () => this.setState({ show: false })
handleShow = () => this.setState({ show: true })

// Update form inputs
handleChange = (event) => {
  const userInput = { [event.target.name]: event.target.value }
  this.setState((currState) => {
    return { updateArt: { ...currState.updateArt, ...userInput } }
  })
}

handleUpdateSubmit = (event) => {
  event.preventDefault()
  const { user, msgAlert, match, history } = this.props
  const data = this.state.updateArt
  const id = match.params.id

  updateArtwork(data, id, user)
    .then(() => this.setState({ updateArt: { title: '', description: '', img: '' } }))
    .then(() => history.push('/artworks'))
    .then(() => {
      msgAlert({
        heading: 'updated!',
        variant: 'success'
      })
    })
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
  // const { user, history, match } = this.props

  return (
    <Fragment>
      <h3>Artwork:</h3>
      <h5>{artwork.title}</h5>
      <p>{artwork.description}</p>
      <img src={artwork.img} />
      <br />
      <Button onClick={this.handleDelete}>Delete</Button>

      {/* update modal */}
      <>
        <Button variant='primary' onClick={this.handleShow}>
        Update
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Artwork</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={this.handleUpdateSubmit}>

              <Form.Group controlId='title'>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  required
                  name='title'
                  type='text'
                  placeholder='New Title'
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId='description'>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  required
                  name='description'
                  type='text'
                  placeholder='New Description'
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId='img'>
                <Form.Label>Image</Form.Label>
                <Form.Control
                  required
                  name='img'
                  type='text'
                  placeholder='Image Link'
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button
                variant='primary'
                type='submit'
                onClick={this.handleClose}>
              Update
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    </Fragment>
  )
}
}

export default withRouter(ShowArtwork)
