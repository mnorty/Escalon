import React, { Component } from "react";
import './Hero.css'


export default class About extends Component {
  render() {
    return (
      <div>
        <div className='hero'>
          <div className="img1">
            <h1> Hero Title Here</h1>
            <h2>I spend a lot of time walking around in the woods and talking to trees, and squirrels and little rabbits and stuff.</h2>
          </div>
          <div className="img2"></div>
        </div>
        <div>
          <h1>h1 title</h1>
          <h2>h2 title</h2>
          <h3>h3 title</h3>
          <h4>h4 title</h4>
          <p>p text</p>
          <li>li text</li>
        </div>
      </div>
    )
  }
}