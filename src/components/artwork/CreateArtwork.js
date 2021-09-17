import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { createArtwork } from '../../api/artwork'
import Canvas from '../artwork/Canvas'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CreateArtwork extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      description: '',
      img: '',
      imgUrl: ''
    }
  }

handleChange = (event) =>
  this.setState({
    [event.target.name]: event.target.value
  })

onFindUrl = (event) => {
  this.setState({ imgUrl: this.state.url })
}

onCreateArtwork = (event) => {
  event.preventDefault()

  const { history, user } = this.props
  const data = this.state

  createArtwork(data, user)
    .then((res) => history.push('/artworks/' + res.data.artwork._id))
    .then(() => this.setState({ title: '', description: '', img: '' }))
    .catch((err) => console.log(console.log(err))
    )
}

render () {
  const { title, description, img } = this.state
  // location

  return (
    <div className='row'>
      <div className='col-sm-10 col-sm-8 mx-auto mt-5'>
        <Form onSubmit={this.onCreateArtwork}>
          <Canvas onClick={this.onFindUrl}/>
          <Form.Group controlId='title'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='text'
              name='title'
              value={title}
              placeholder='Title'
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId='description'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              name='description'
              value={description}
              placeholder='Description'
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId='img'>
            <Form.Label>Image</Form.Label>
            <Form.Control
              type='text'
              name='img'
              value={img}
              placeholder='Image'
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button variant='primary' type='submit'>Create</Button>
        </Form>
      </div>
    </div>
  )
}
}

export default withRouter(CreateArtwork)
