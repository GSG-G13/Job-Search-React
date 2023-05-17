import { Component } from 'react';
import './style.css'
class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <img src='/images/logo.jpg' alt='Navbar' className='navbar-logo' />
        <p className='navbar-title'>Job Search</p>
      </div>
    )
  }
}

export default Navbar