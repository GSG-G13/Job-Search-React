import { Component } from 'react';
import './style.css'
class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <img src='/images/navbar-logo.png' alt='Navbar' className='navbar-logo' />
        <p className='navbar-title'>Linked In</p>
      </div>
    )
  }
}

export default Navbar