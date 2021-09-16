import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'
import SignIn from '../auth/SignIn'
import SignUp from '../auth/SignUp'

const authenticatedOptions = (
  <Fragment>
    <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
    <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
    <NavLink to='/create-artwork' className='nav-link'>Create</NavLink>
    <NavLink to='/artworks' className='nav-link'>Creations</NavLink>
    <NavLink to='/artworks/:id' className='nav-link'>Creation</NavLink>
  </Fragment>
)

// const unauthenticatedOptions = (
//   <Fragment>
//     <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
//     <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
//   </Fragment>
// )

const alwaysOptions = (
  <Fragment>
    <NavLink exact to='/' className='nav-link'>Home</NavLink>
  </Fragment>
)

const Header = ({ user, setUser, msgAlert }) => (
  <Navbar bg='primary' variant='dark' expand='md'>
    <Navbar.Brand>
      <Link to='/' style={{ color: '#FFF', textDecoration: 'none' }}>Digi-seum</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto'>
        {user && (
          <span className='navbar-text mr-2'>Welcome, {user.username}</span>
        )}
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
