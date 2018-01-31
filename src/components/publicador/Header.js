import React, { Component } from 'react';

import logoblanco from '../global/images/logoblanco.png';
import '../global/css/App.css';



class Header extends Component {

  constructor(props){
    super(props);
    this.token = localStorage.getItem('token');
  }

  render() {
    return (
      <div className="Header" >
        <nav className='dark-primary'>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo center">
              <img src={logoblanco} className='logo' />
            </a>
            <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
