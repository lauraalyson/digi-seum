import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { updateArtwork, showArtwork, indexArtwork } from '../../api/artwork'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class UpdateArtwork extends Component {
  constructor (props) {
    super(props)
    this.state = {
      artwork: {
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
      .catch((err) => console.log(err))
  }

handleClose = () => this.setState({ show: false })
handleShow = () => this.setState({ show: true })
handleChange = (event) => {
  const userInput = { [event.target.name]: event.target.value }
  this.setState((currState) => {
    return { artwork: { ...currState.artwork, ...userInput } }
  })
}

handleUpdateSubmit = (event) => {
  event.preventDefault()
  const { user, msgAlert, match } = this.props
  const data = this.state.artwork
  const id = match.params.id

  indexArtwork(user)
    .then(() => console.log('this worked'))
    .then((res) => console.log('this is res in update index: ', res))
    .catch((err) => console.log(err))

  updateArtwork(data, id, user)
    .then(() => console.log('this is user in update artwork popup: ', user))
    .then(() => this.setState({ artwork: { title: '', description: '', img: '' } }))
    // .then(() =>
    //   indexLocations(user)
    //     .then((res) => {
    //       console.log(res)
    //       // const placeholder = document.createElement('div')
    //       // ReactDOM.render(PopupButton, placeholder)
    //       for (const { coordinates, location, description, _id } of res.data
    //         .locations) {
    //       // this.updateData = { location, description, _id }
    //       // make a marker for each location and add to the map
    //         new mapboxgl.Marker({
    //           draggable: false,
    //           color: '#ffff'
    //         })
    //           .setLngLat(coordinates)
    //           .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //               `
    //           <div>
    //           <h4>${location}</h4>
    //           <h6>${description}</h6>
    //           <p>ID: ${_id}</p>
    //           <button onClick={removePopUp}>delete</button>
    //           </div>
    //           `
    //             )
    //           )
    //           .addTo(map)
    //       }
    //     })
    // )
    .then(() => {
      msgAlert({
        heading: 'updated!',
        variant: 'success'
      })
    })
    .catch((err) => console.log(err))
}

// handleDeleteSubmit = (event) => {
//   event.preventDefault()

//   const { user, msgAlert } = this.props
//   const data = this.state.artwork
//   // const id = match.params.id

//   deleteArtwork(data.id, user)
//     .then(() => this.setState({ artwork: { title: '', description: '', img: '' } }))
//     .then(() => {
//       msgAlert({
//         heading: 'Deleted!',
//         variant: 'success'
//       })
//     })
//     .catch((err) => {
//       msgAlert({
//         heading: 'Unable to delete artwork',
//         message: err.message,
//         variant: 'danger'
//       })
//     })
// }

render () {
  // const { artwork } = this.state

  return (
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
        {/*
        <Modal.Header>
          <Modal.Title>or Delete Artwork</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleDeleteSubmit}>
            <Form.Group controlId='Title'>
              <Form.Label>ID</Form.Label>
              <Form.Control
                required
                name='id'
                type='text'
                placeholder='Copy the ID the location you would like to update'
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              variant='primary'
              type='submit'
              onClick={this.handleClose}>
              Delete
            </Button>
          </Form>
        </Modal.Body> */}
      </Modal>
    </>
  )
}
}

export default withRouter(UpdateArtwork)
