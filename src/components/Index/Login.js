  import React, { Component } from 'react';
import Data from '../Data/data';
import fetch from 'isomorphic-fetch';

import Header from './Header';
import '../global/css/App.css';


class Login extends Component {

  constructor(props) {
    super(props);
    this.token = localStorage.getItem('token');
    this.state = {
      correo: '',
      password: '',
      message: ''
    };

    this.handleChanges = this.handleChanges.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChanges(event) {
    const target = event.target;
    
    if(target.name === 'password'){
      this.setState({password : target.value});
    }
    if(target.name === 'correo'){
      this.setState({correo : target.value});
    }
  }
  handleSubmit(event) {
    
    var data = this.state;
    delete data.message;  

    fetch(  
      Data.api + '/publicador/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if(res.status === 400){
        res.json().then(data => {
          this.setState({message: data.message});
        });
      }
      if(res.status === 200){
        res.json().then(data => {
          localStorage.setItem('token', data.token);
          this.props.history.push('/');
        });
      }

    }).catch(err => {
      console.log(err);
      throw (err);
    });

    event.preventDefault();
  } 
  
  isLogged(){
    console.log("checking");
    if(this.token){
      this.props.history.push('/'); 
    }
  }

  render() {
    this.isLogged();
    return (
      <div className="Login light-primary">
        <Header />
          <div className="wrapper">
            <div className='center error'>
              {this.state.message}
            </div>
            <form className="form-signin " onSubmit = { this.handleSubmit } >       
              <h2 className="form-signin-heading">Iniciar Sesión</h2>
              <input  className="form-control"  placeholder="Correo" autofocus type="email" name="correo" id="email" required value = { this.state.value } onChange = { this.handleChanges } />
              <input  className="form-control"  placeholder="Contraseña" type="password" name="password" id="password" required value={ this.state.value } onChange = { this.handleChanges }/>
              <button className="btn btn-lg btn-primary btn-block dark-primary" type="submit">Login</button>   
            </form>
          </div>
      </div>
    );
  }
}

export default Login;
