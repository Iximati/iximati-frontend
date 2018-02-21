import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fetch from 'isomorphic-fetch';

import Data from '../Data/data';

import '../global/css/App.css';
import Header from './Header';
import Dashboard from './Dashboard';
import Body from './Body';




class Inicio extends Component {

  constructor(props){
    super(props);

    this.token = localStorage.getItem('token');
      this.state = { 
        nombre: '',
        apellido: '',
        correo: ''
      }

    console.log("checking");
    if(!this.token){
      this.props.history.push('/');
    }
    else{
      var token = this.token;
      fetch(  
        Data.api + '/publicador', {
        method: 'GET',
        mode: 'CORS',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-authorization': token
        }
      }).then(res => {
        if(res.status === 400){
          res.json().then(data => {
            this.setState({message: data.message});
          });
        }
        
        if(res.status === 403){
          console.log('forbiden');
          this.props.history.push('/');
        }
        if(res.status === 200){
          res.json().then(data => {
            this.setState({
              nombre: data[0].nombre,
              apellido: data[0].apellido,
              correo: data[0].correo
            })
          });
        }

      }).catch(err => {
        console.log(err);
      });
    }
  }
  render() {
    const data = this.state;
    return (
      <div className="Inicio">
        <Dashboard data={data} />
        <Body data={data} />

      </div>
    );
  }
}

export default Inicio;
