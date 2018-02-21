import React, { Component } from 'react';

import version from '../global/images/alfa.png';
import logo from '../global/images/logo.png';
import '../global/css/App.css';


import Data from '../Data/data';

class Searchbar extends Component {

  render() {
    return (
      <div className="Searchbar">
        <div className='dark-primary searchnav white-text'>
          <div className='container'>
            <h1 className='center searchbar-title'>{Data.title}</h1>
            <p className='center searchbar-brand'>
              Consulta artículos científicos y de divulgación
            </p>
            <div className='searchbar center accent'>
              <input className='searchbar' type='searchbar' />
              <button className='searchbar-icon'>
                <i class="material-icons ">
                  search
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Searchbar;
