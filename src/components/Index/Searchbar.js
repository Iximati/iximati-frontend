import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

import version from '../global/images/alfa.png';
import logo from '../global/images/logo.png';
import '../global/css/App.css';


import Data from '../Data/data';

class Searchbar extends Component {

  render() {
    return (
      <div className="Searchbar">
        <Jumbotron className='dark-primary searchnav white-text'>
          <div className='container'>
            <h1 className='center searchbar-title'>{Data.title}</h1>
            <p className='center searchbar-brand'>
              Consulta artículos científicos y de divulgación
            </p>
            <div className='searchbar center accent'>
              <input className='searchbar' type='searchbar' />
              <Button className='searchbar-icon'>
                <i class="material-icons ">
                  search
                </i>
              </Button>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Searchbar;
