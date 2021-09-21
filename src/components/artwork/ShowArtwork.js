// Show, Delete, and Edit Button Artwork
import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import './../../index.scss'

// API calls
import { updateArtwork, showArtwork, deleteArtwork } from '../../api/artwork'
import {
  updateArtworkFailure,
  updateArtworkSuccess,
  deleteArtworkSuccess,
  deleteArtworkFailure,
  showArtworkFailure
} from '../AutoDismissAlert/messages'

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
    const { match, user, msgAlert } = this.props

    showArtwork(match.params.id, user)
      .then((res) => this.setState({ artwork: res.data.artwork }))
      .catch((err) =>
        msgAlert({
          heading: 'Unable to create artwork.',
          message: showArtworkFailure + err,
          variant: 'danger'
        })
      )
  }

handleClose = () => this.setState({ show: false })
handleShow = () => this.setState({ show: true })
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
    .then(() => this.setState({ updateArt: { title: '', description: '' } }))
    .then(() => {
      msgAlert({
        heading: 'Updated artwork.',
        message: updateArtworkSuccess,
        variant: 'success'
      })
    })
    .then(() => history.push('/artworks'))
    .catch((err) =>
      msgAlert({
        heading: 'Unable to update artwork.',
        message: updateArtworkFailure + err,
        variant: 'danger'
      })
    )
}

handleDelete = (event) => {
  const { match, user, history, msgAlert } = this.props
  deleteArtwork(match.params.id, user)
    .then(() =>
      msgAlert({
        heading: 'Deleted artwork.',
        message: deleteArtworkSuccess,
        variant: 'success'
      })
    )
    .then(() => history.push('/artworks'))
    .catch(() =>
      msgAlert({
        heading: 'Unable to delete artwork.',
        message: deleteArtworkFailure,
        variant: 'danger'
      })
    )
}

render () {
  const { artwork } = this.state

  return (
    <Fragment>
      <img src={artwork.img} />
      <h3>{artwork.title}</h3>
      <p>{artwork.description}</p>
      <br />
      <Button className='primary button-custom' onClick={this.handleDelete}>Delete</Button>

      <>
        <Button className='primary button-custom' onClick={this.handleShow}>
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
              <Button
                className='primary'
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
