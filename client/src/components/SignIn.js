import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { saveAuthTokens } from '../util';
import { FormComponent } from '../styles/Forms';

class SignIn extends Component {
 constructor(){
   super();
   this.state = {
       email: '',
       password: '',
       redirect: false
   }
 }

_signIn = async (e) => {
  e.preventDefault();
  const payload = {
    email: this.state.email,
    password: this.state.password,
  }
  const response = await axios.post('/auth/sign_in', payload);
  saveAuthTokens(response.headers);
  this._createFavorite();
  this.setState({redirect: true})
}

 _handleChange = (e) => {
   const newState = {...this.state};
   newState[e.target.name] = e.target.value;
   this.setState(newState);
 }

 _createFavorite = async () => {
   const res = await axios.post('/api/favorites')
 }

 render() {
   if (this.state.redirect){
     return <Redirect to="/" />
   }
   return (
     <div>
       <FormComponent>
       <form onSubmit={this._signIn}>
         <div>
           <label htmlFor="email">E-mail: </label>
           <input onChange={this._handleChange} type="text" name="email" value={this.state.email} />
         </div>
         <div>
           <label htmlFor="password">Password: </label>
           <input onChange={this._handleChange} type="text" name="password" value={this.state.password} />
         </div>
         <button>Sign In</button>
         {/* <button><Link to="/signup">Sign Up</Link></button> */}
       </form>
       </FormComponent>
     </div>
   );
 }
}

export default SignIn;