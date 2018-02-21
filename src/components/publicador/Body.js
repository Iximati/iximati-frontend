import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from '../global/images/logoblanco.png';
import Header from './Header';
import Dashboard from './Dashboard';

import '../global/css/Dashboard.css';



class Body extends Component {
  constructor(props){
    super(props);
    this.state = {display: 'inicio'};
    console.log(this.state);

    this.logout = this.logout.bind(this);
    this.changedisplay = this.changedisplay.bind(this);
  }

  logout(e){
    alert('adios');
    localStorage.removeItem('token');
    this.props.history.push('/');
  }

  changedisplay(e){
    var view;
    if(e){
      view = e.target.id;  
    }
    else{
      view = 'inicio'
    }

    this.setState({display: view});
  }

  render() {
  console.log( 'b',this.props);
    return (
      <div className="Body" >
        <div className='Dashboard-Navbar dark-primary'>
          <a href='/'>
            <img className='logo' src={logo}/>
          </a>
        </div>
        <div className='row'>
          <div className='Dashboard-side-nav primary col-xs-2'>
            <ul id="" class="dashboard">
              <li><div class="user-view">
                <div class="background light-primary">
                </div>
                <a href="#!user"><img class="circle responsive-img" src={logo} /></a>
                <a href="#!name"><span class="white-text name">{this.props.data.nombre}</span></a>
                <a href="#!email"><span class="white-text email">{this.props.data.correo}</span></a>
              </div></li>
              <li><a id='publicaciones' onClick={this.changedisplay} href="#!"><i id='publicaciones' class="material-icons">list</i>Publicaciones</a></li>
              <li><a id='nuevapublicacion' onClick={this.changedisplay} href="#!"><i id='nuevapublicacion' class="material-icons">add</i>Agregar Publicacion</a></li>
              <li><div class="divider"></div></li>
              <li><a class="subheader">Opciones</a></li>
              <li className='waves-effect' onClick= { this.logout }><a href="/">Cerrar Sesión<i class="material-icons">directions_run</i></a></li>
            </ul>
            <ul id="slide-out" class="side-nav">
              <li><div class="user-view">
                <div class="background light-primary">
                </div>
                <a href="#!name"><span class="white-text name">{this.props.data.nombre}</span></a>
                <a href="#!email"><span class="white-text email">{this.props.data.correo}</span></a>
              </div></li>
              <li><a id='publicaciones' onClick={this.changedisplay} href="#!"><i id='publicaciones'class="material-icons">list</i>Publicaciones</a></li>
              <li><a id='nuevapublicacion' onClick={this.changedisplay} href="#!"><i id='nuevapublicacion' class="material-icons">add</i>Agregar Publicacion</a></li>
              <li><div class="divider"></div></li>
              <li><a class="subheader">Opciones</a></li>
              <li className='waves-effect' onClick= { this.logout }><a href="/">Cerrar Sesión<i class="material-icons">directions_run</i></a></li>
            </ul>
          </div>
          <div className='Dashboard-window light-primary col-xs-10' >
            <Dashboard display={ this.state.display }/>
          </div>
        </div>
        <div className="row">
          <div className='col-sm3  dashboard-nav z-depth-4'>
            
          </div>




          <div className= 'col l10 s12 publicaciones dashboard-content'>
            <Header/>
            
          </div>
          
        </div>
      </div>
    );
  }
}

export default Body;

