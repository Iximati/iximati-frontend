import React, { Component } from 'react';
import Data from '../Data/data';
import fetch from 'isomorphic-fetch';

import './css/App.css';


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
      <div className="Login">
        <div className="valign-wrapper row login-box">
          <div className="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
            <div className='center-align red'>
              {this.state.message}
            </div>
            <form onSubmit = { this.handleSubmit } >
              <div className="card-content">
                <span className="card-title">Iniciar Sesidn</span>
                <div className="row">
                  <div className="input-field col s12">
                    <label>
                      Correo
                    </label>
                    <input type="email" name="correo" id="email" required value = { this.state.value } onChange = { this.handleChanges } />
                  </div>
                  <div className="input-field col s12">
                    <label >Contraseña</label>
                    <input type="password" name="password" id="password" required value={ this.state.value } onChange = { this.handleChanges } />
                  </div>
                </div>
              </div>
              <div className="card-action right-align">
                <input type="submit" className="btn blue-secu waves-effect waves-light" value="Entrar"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
