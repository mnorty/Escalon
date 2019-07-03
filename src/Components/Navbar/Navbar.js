import React, { Component } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
  }

  showMenu() {
    this.setState({showMenu: !this.state.showMenu});
  }

  render() {
    return (
        <nav>
          <div className='container'>
            <div className='title'>
            <Link to='/'>Game Show</Link>
            </div>
            <ul className='nav-links'>
            <a className='nav-gc'>
              <Link to='/gamecentral'>Game Central</Link>
            </a>
              <span>|</span>
              <a className='nav-reg'>
              <Link to='/register'>Register</Link>
              </a>
              <span>|</span>
              <a className='nav-join'>
              <Link to='/join'>Join</Link>
              </a>
            </ul>
            <div className="nav-button" onClick={this.showMenu}>
              <span></span> 
              <span></span>
              <span></span>
            </div>
          </div>
            <div className={this.state.showMenu ? 'nav-menu nav-menu-show' : 'nav-menu'}>
              <ul className='nav-list'>
                <li>GameList</li>
                <li>GameCentral</li>
                <li>Register</li>
                <li>Account</li>
                
              </ul>
            </div>
        </nav>
    );
  }
}

        export default Navbar;