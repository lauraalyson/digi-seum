import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import { signUpSuccess, signUpFailure } from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './../../index.scss'

class SignUp extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      passwordConfirmation: '',
      show: false
    }
  }

handleClose = () => this.setState({ show: false })
handleShow = () => this.setState({ show: true })
handleChange = (event) =>
  this.setState({
    [event.target.name]: event.target.value
  })

onSignUp = (event) => {
  event.preventDefault()

  const { msgAlert, history, setUser } = this.props

  signUp(this.state)
    .then(() => signIn(this.state))
    .then((res) => setUser(res.data.user))
    .then(() =>
      msgAlert({
        heading: 'Sign In Success',
        message: signUpSuccess,
        variant: 'success'
      })
    )
    .then(() => history.push('/'))
    .catch((error) => {
      this.setState({ username: '', password: '', passwordConfirmation: '' })
      msgAlert({
        heading: 'Sign Up Failed with error: ' + error.message,
        message: signUpFailure,
        variant: 'danger'
      })
    })
}

render () {
  const { username, password, passwordConfirmation } = this.state

  return (
    <Fragment>
      <Button className='primary' style={{ border: 'none', borderRadius: '30px', margin: '6px 10px' }} onClick={this.handleShow}>Sign Up
      </Button>
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={this.onSignUp}>
            <Form.Group controlId='username'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                type='text'
                name='username'
                value={username}
                placeholder='Enter username'
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                name='password'
                value={password}
                type='password'
                placeholder='Password'
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId='passwordConfirmation'>
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                required
                name='passwordConfirmation'
                value={passwordConfirmation}
                type='password'
                placeholder='Confirm Password'
                onChange={this.handleChange}
              />
            </Form.Group>
            <br />
            <Button className='primary' type='submit'>Submit
            </Button>
            <br />
          </Form>
        </Modal.Body>
      </Modal>
    </Fragment>
  )
}
}

export default withRouter(SignUp)
