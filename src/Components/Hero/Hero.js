import React, { Component } from "react";
import './Hero.css'
import {Link} from 'react-router-dom'


export default class About extends Component {
  render() {
    return (
      <div>
        <div className='hero'>
          <div className="img1">
            <h1>Welcome to Game-Show!</h1>
            <h2>You create the test, we do the rest!</h2>
            <button className="hero-btn">
                <Link to="/register">
                  Get Started
                </Link>
            </button>
          </div>
          <div className="img2"></div>
        </div>
        {/* <div>
          <h1>h1 title</h1>
          <h2>h2 title</h2>
          <h3>h3 title</h3>
          <h4>h4 title</h4>
          <p>p text</p>
          <li>li text</li>
        </div> */}
      </div>
    )
  }
}