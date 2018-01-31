import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from '../global/images/logo.png';
import Header from './Header';
import Dashboard from './Dashboard'
import '../global/css/App.css';



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

    return (
      <div className="Body" >
        <div className="row">
          <div className='col m3 l2 hide-on-med-and-down dashboard-nav z-depth-4'>
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
          </div>
          <div className= 'col l10 s12 publicaciones dashboard-content'>
            <Header/>
            <Dashboard display={ this.state.display }/>
          </div>
          <ul id="slide-out" class="side-nav">
            <li><div class="user-view">
              <div class="background light-primary">
              </div>
              <a href="#!user"><img class="circle responsive-img" src={logo} /></a>
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
      </div>
    );
  }
}

export default Body;

