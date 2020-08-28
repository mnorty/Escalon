import React, { Component } from "react";
import './Hero.css'
import {Link} from 'react-router-dom'


export default class About extends Component {
  constructor(){
    super()

  }

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
        <div className='bottom-bar'></div>
      </div>
    )
  }
}