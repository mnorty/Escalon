import React, { Component } from "react";
import './Hero.css'
import {Link} from 'react-router-dom'


export default class About extends Component {
  constructor(){
    super()

    // Refs
    this.divOne = React.createRef();
    this.divTwo = React.createRef();
    this.divThree = React.createRef();
    this.divFour = React.createRef();
    this.divFive = React.createRef();
    this.monitor = React.createRef();
    this.hOne = React.createRef();
    this.hTwo = React.createRef();
    this.hThree = React.createRef();
    this.textOne = React.createRef();
  }

  componentDidMount(){
    window.addEventListener('scroll', () => {
      console.log(window.pageYOffset)
      // div one
      if(window.pageYOffset >= 630){
        console.log(this.divOne)
        this.divOne.current.style.display = 'flex';
      }
      // div two
      if(window.pageYOffset >= 800){
        this.divTwo.current.style.display = 'flex'
      }

      if(window.pageYOffset >= 907){
        this.divThree.current.style.display = 'flex'
      }

      if(window.pageYOffset >= 1115){
        this.divFour.current.style.display = 'flex'
      }

      if(window.pageYOffset >= 1355){
        this.divFive.current.style.display = 'flex'
      }

      if(window.pageYOffset >= 400){
        this.monitor.current.style.display = 'flex'
      }

      if(window.pageYOffset >= 1561){
        this.hOne.current.style.display = 'flex'
      }

      if(window.pageYOffset >= 1561){
        this.hTwo.current.style.display = 'flex'
      }

      if(window.pageYOffset >= 1561){
        this.hThree.current.style.display = 'flex'
      }

      if(window.pageYOffset >= 2100){
        this.textOne.current.style.display = 'flex'
      }

      

      
    })
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
        <div className='monitor-section'>
          <div ref={this.monitor} className='monitor-img'> </div>
          <div className='text-section'>
          <div ref={this.divOne}>
            <h1>Feature Here</h1>
            <h2>I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff.</h2>
          </div>
          <div ref={this.divTwo}>
            <h1>Feature Here</h1>
            <h2>I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff.</h2>
          </div>
          <div ref={this.divThree}>
            <h1>Feature Here</h1>
            <h2>I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff.</h2>
          </div>
          <div ref={this.divFour}>
            <h1>Feature Here</h1>
            <h2>I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff.</h2>
          </div>
          <div ref={this.divFive}>
            <h1>Feature Here</h1>
            <h2>I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff.</h2>
          </div>
          </div>
        </div>
        <div className='benefit-section'>
          <div className='space-theme'>
          <div ref={this.hOne}>
            <h1>Key Benefit</h1>
            <h2>I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff.</h2>
          </div>
          <div ref={this.hTwo}>
            <h1>Key Benefit</h1>
            <h2>I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff.</h2>
          </div>
          <div ref={this.hThree}>
            <h1>Key Benefit</h1>
            <h2>I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff.</h2>
          </div>
          </div>
        </div>
        <div className='info-section'>
        <div ref={this.textOne} className='info-text-section'>

        <h2>I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff.</h2>
        <h2>I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff.</h2>
        <h2>I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff.</h2>
        <h2>I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff.</h2>
      
        </div>
        </div>
        <div className='bottom-bar'></div>
      </div>
    )
  }
}