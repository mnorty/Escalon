import React from "react";
import axios from 'axios';
import './Register.css';
import {connect} from 'react-redux';
import {login} from '../../redux/adminReducer'


class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      showRegisterDisplay: false,
      firstname: '',
      lastname: '',
      password: '',
      email: '',
    }
  }

  toggleRegisterMenu = event => {
    event.preventDefault();
    this.setState({
      showRegisterDisplay: !this.state.showRegisterDisplay
    })
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleRegisterUser = (event) => {
    event.preventDefault()
    const { firstname, lastname, password, email } = this.state
    axios.post('/auth/register', { firstname, lastname, password, email })
      .then((response) => {
        // Store user to redux
        this.props.login(response.data)
        if (response.data.email) {
          this.props.history.push('/gamecentral')
        }
      })
  }

  handleLoginUser = (event) => {
    event.preventDefault()
    const { password, email } = this.state
    axios.post('/auth/login', { password, email })
      .then((response) => {
        // store the redux user
        this.props.login(response.data)
        if (response.data.email) {
          console.log('logged in')
          this.props.history.push('/gamecentral')
        }
      })
  }
  render() {
    return (
      <div className='registerCont'>
        {
          this.state.showRegisterDisplay ?
            <div className='registerContHolder'>
              <div className='registerHeader'>
                <h1>Create An Account</h1>
                <p>Already have an account? <span onClick={this.toggleRegisterMenu}>Log in</span></p>
              </div>
              <form className='registerForm' onSubmit={this.handleRegisterUser}>
                <p>First Name</p>
                <input onChange={this.handleInputChange} firstname="firstname" name='firstname' />
                <p>Last Name</p>
                <input onChange={this.handleInputChange} lastname="lastname" name='lastname' />
                <p>Email</p>
                <input onChange={this.handleInputChange} email="email" name='email' />
                <p>Password</p>
                <input onChange={this.handleInputChange} password="password" name='password' />
                <div className='registerFormBtn'><button>create account</button></div>
              </form>
            </div>
            :
            <div className='registerContHolder'>
              <div className='registerHeader'>
                <h1>Log in to Account</h1>
                <p>Don't have an account? <span onClick={this.toggleRegisterMenu}>Create one</span></p>
              </div>
              <form className='registerForm' onSubmit={this.handleLoginUser}>
                <p>Email</p>
                <input onChange={this.handleInputChange} email="email" name='email' />
                <p>Password</p>
                <input onChange={this.handleInputChange} password="password" name='password' />
                <div className='registerFormBtn'><button>log in</button></div>
              </form>
            </div>
        }
      </div>
    );
  }
};

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps, {login})(Register);