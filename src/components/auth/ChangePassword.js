import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { changePassword } from '../../api/auth'
import { changePasswordSuccess, changePasswordFailure } from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './../../index.scss'

class ChangePassword extends Component {
  constructor (props) {
    super(props)

    this.state = {
      oldPassword: '',
      newPassword: '',
      show: true
    }
  }

handleClose = () => this.setState({ show: false })
handleShow = () => this.setState({ show: true })
handleChange = (event) =>
  this.setState({
    [event.target.name]: event.target.value
  })

onChangePassword = (event) => {
  event.preventDefault()

  const { msgAlert, history, user } = this.props

  changePassword(this.state, user)
    .then(() =>
      msgAlert({
        heading: 'Change Password Success',
        message: changePasswordSuccess,
        variant: 'success'
      })
    )
    .then(() => history.push('/'))
    .catch((error) => {
      this.setState({ oldPassword: '', newPassword: '' })
      msgAlert({
        heading: 'Change Password Failed with error: ' + error.message,
        message: changePasswordFailure,
        variant: 'danger'
      })
    })
}

render () {
  const { oldPassword, newPassword } = this.state

  return (
    <>
      <Modal show={this.state.show} onHide={this.handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={this.onChangePassword}>
            <Form.Group controlId='oldPassword'>
              <Form.Label>Old password</Form.Label>
              <Form.Control
                required
                name='oldPassword'
                value={oldPassword}
                type='password'
                placeholder='Old Password'
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId='newPassword'>
              <Form.Label>New Password</Form.Label>
              <Form.Control
                required
                name='newPassword'
                value={newPassword}
                type='password'
                placeholder='New Password'
                onChange={this.handleChange}
              />
            </Form.Group>
            <br />
            <Button className='primary custom-button' type='submit'>Submit</Button>
          </Form>
          <br />
        </Modal.Body>
      </Modal>
    </>
  )
}
}

export default withRouter(ChangePassword)
