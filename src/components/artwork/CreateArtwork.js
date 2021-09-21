import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { createArtwork } from '../../api/artwork'
import { createArtworkSuccess, createArtworkFailure } from '../AutoDismissAlert/messages'

import ClassicArtRandom from './ClassicArtRandom'
import Artwork from '../artwork/Canvas'

import '../../index.scss'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Layer, Stage } from 'react-konva'

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
      const imgUrl = this.stageRef.getStage().toDataURL({ mimeType: 'image/png' })
      this.setState({ img: imgUrl })
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

      const { history, user, msgAlert } = this.props
      const data = this.state

      createArtwork(data, user)
        .then((res) => history.push('/artworks/' + res.data.artwork._id))
        .then(() =>
          msgAlert({
            heading: 'Successfully created artwork.',
            message: createArtworkSuccess,
            variant: 'success'
          }))
        .then(() => this.setState({ title: '', description: '', img: '' }))
        .catch(() =>
          msgAlert({
            heading: 'Unable to create artwork.',
            message: createArtworkFailure,
            variant: 'danger'
          })
        )
    }

    render () {
      const { title, description } = this.state

      return (
        <div>
          <div className='row'>
            <div className='col-5 create-form'>
              <Form onSubmit={this.onCreateArtwork}>
                <Form.Group controlId='title'>
                  <br />
                  <h3>Title</h3>
                  <Form.Control
                    type='text'
                    name='title'
                    value={title}
                    placeholder='Give your work a title'
                    onChange={this.handleChange}
                  />
                </Form.Group><br />

                <Form.Group controlId='description'>
                  <h3>Description</h3>
                  <Form.Control
                    type='text'
                    name='description'
                    value={description}
                    placeholder='Give your work a description'
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <br />
                <Stage
                  ref={(node) => {
                    this.stageRef = node
                  }}
                  background={'white'}
                  width={300}
                  height={300}
                >
                  <Layer>
                    <Artwork />
                  </Layer>
                </Stage>
                <br />
                <Button
                  className='button-custom create-button'
                  type='submit'
                  style={{ position: 'relative' }}
                  onClick={this.handleExportClick}>Create
                </Button>
              </Form>
            </div>
            <div className='col-7'>
              <ClassicArtRandom />
            </div>
          </div>
        </div>
      )
    }
}

export default withRouter(CreateArtwork)
