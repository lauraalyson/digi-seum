import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { createArtwork } from '../../api/artwork'
import Artwork from '../artwork/Canvas'
import { Layer, Stage } from 'react-konva'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import ArtworkCanvas from './ArtworkCanvas'
// import Artwork from './Canvas'

class CreateArtwork extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      description: '',
      img: ''
    }
  }

    handleExportClick = (event) => {
      console.log('this is the event \n', event)
      // console.log(this.stageRef.getStage().toDataURL({ mimeType: 'image/png' }))
      const imgUrl = this.stageRef.getStage().toDataURL({ mimeType: 'image/png' })

      console.log('this is imgURL \n', imgUrl)
      this.setState({ img: imgUrl })
      console.log('this is now the state of the url', this.state.img)
    }

    handleChange = (event) =>
      this.setState({
        [event.target.name]: event.target.value
      })

    onFindUrl = (event) => {
      this.setState({ img: this.state.img })
    }

    onCreateArtwork = (event) => {
      event.preventDefault()

      const { history, user } = this.props
      const data = this.state

      createArtwork(data, user)
        .then((res) => history.push('/artworks/' + res.data.artwork._id))
        .then(() => this.setState({ title: '', description: '', img: '' }))
        .catch((err) => console.log(console.log(err)))
    }

    render () {
      const { title, description } = this.state
      // location

      return (
        <div>
          <div className='row'>
            <div className='col-sm-10 col-sm-8 mx-auto mt-5'>
              <Form onSubmit={this.onCreateArtwork}>
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
                <Stage
                  ref={(node) => {
                    this.stageRef = node
                  }}
                  width={300}
                  height={300}>
                  <Layer>
                    <Artwork />
                  </Layer>
                </Stage>
                <Button
                  variant='primary'
                  type='submit'
                  style={{ position: 'relative' }}
                  onClick={this.handleExportClick}
                >Create
                </Button>
              </Form>
            </div>
          </div>
        </div>
      )
    }
}

export default withRouter(CreateArtwork)
