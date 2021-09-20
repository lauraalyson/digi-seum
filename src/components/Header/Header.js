import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import SignIn from '../auth/SignIn'
import SignUp from '../auth/SignUp'
import './../../index.scss'

const authenticatedOptions = (
  <Fragment>
    <NavDropdown title='Account' id='basic-nav-dropdown'>
      <NavDropdown.Item><NavLink to='/artwork-canvas' className='nav-link'>ArtworkCanvas(not working)</NavLink></NavDropdown.Item>
      <NavDropdown.Item><NavLink to='/create-artwork' className='nav-link'>Create</NavLink></NavDropdown.Item>
      <NavDropdown.Item><NavLink to='/artworks' className='nav-link'>Creations</NavLink></NavDropdown.Item>
      <NavDropdown.Item><NavLink to='/change-password' className='nav-link'>Change Password</NavLink></NavDropdown.Item>
      <NavDropdown.Item><NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink></NavDropdown.Item>
    </NavDropdown>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    {/* <NavLink exact to='/' className='nav-link'>Home</NavLink> */}
  </Fragment>
)

const Header = ({ user, setUser, msgAlert }) => (
  <Navbar bg='rgb(249,249,249)' variant='light' expand='md'>
    <Navbar.Brand className='justify-content-end'>
      <Link to='/' style={{ color: 'rgb(82,100,91)', textDecoration: 'none', textTransform: 'capitalize' }}><h1>Digi-seum</h1></Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto '>
        {/* {user && (
          <span className='navbar-text mr-2 justify-content-end'>Welcome, {user.username}</span>
        )} */}
        {alwaysOptions}
        {user
          ? authenticatedOptions
          : (
            <Fragment>
              <SignIn user={user} setUser={setUser} msgAlert={msgAlert} />
              <SignUp user={user} setUser={setUser} msgAlert={msgAlert} />
            </Fragment>
          )
        }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
