import React from "react";
import "reset-css";
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
// import {connect} from 'react-redux'
// import {Register} from '../Register'

// Styled Components
import {
  AppContainer,
  FormContainer,
  FormHeader,
  FormTitle,
  FormInput,
  FormBtn
} from "./RegisterStyle";

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

handleInputChange  = (event) => {
  this.setState({
    [event.target.name] : event.target.value
  })
}

handleRegisterUser = (event) => {
  event.preventDefault()
  const{firstname, lastname, password, email} = this.state
  axios.post('/auth/newUser', {firstname, lastname, password, email})
  .then((response) => {
    // Store user to redux
    this.props.login(response.data)
    if(response.data.email){
      this.props.history.push('')
    }
  })
}

handleLoginUser = (event) => {
  event.preventDefault()
  const{password, email} = this.state
  axios.post( '/auth/login',{password, email})
  .then((response) => {
    // store the redux user
    this.props.login(response.data)
    if(response.data.email){
      this.props.history.push('')
    }
  })
}

  render() {
    console.log(this.state)
    return (
      
      <div>
          {/* <LoginNavbar /> */}
        {
          this.state.showRegisterDisplay ?
          <AppContainer>
          <FormContainer onSubmit={this.handleRegisterUser}>
            <FormHeader>
              <FormTitle>Create Account</FormTitle>
              {/* <FormTitle>Already have an account? Log In.</FormTitle> */}
            </FormHeader>
            <FormInput onChange={this.handleInputChange} firstname="firstname" name='firstname' />
            <FormInput onChange={this.handleInputChange} lastname="lastname" name='lastname' />
            <FormInput onChange={this.handleInputChange} email="email" name='email' />
            <FormInput onChange={this.handleInputChange} password="password" name='password' />
            <FormBtn>Submit</FormBtn>
            <FormBtn register onClick={this.toggleRegisterMenu}>Cancel</FormBtn>
          </FormContainer>
        </AppContainer>

        : <AppContainer>
        <FormContainer onSubmit={this.handleLoginUser}>
          <FormHeader>
            <FormTitle>Log In To An Account</FormTitle>
          </FormHeader>
          <FormInput onChange={this.handleInputChange} email="email" name="email"/>
          <FormInput onChange={this.handleInputChange} password="password" name="password"/>
          <FormBtn>Submit</FormBtn>
          <FormBtn register onClick={this.toggleRegisterMenu}>Register</FormBtn>
        </FormContainer>
      </AppContainer>
        }
      
        


        
      </div>
    );
  }
};

// function mapStateToProps(state) {
//   return state
// }

export default Register
//  connect(mapStateToProps, {register})(Register);