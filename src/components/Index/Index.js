  import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Inicio from '../publicador/Inicio';
import Header from './Header';
import Searchbar from './Searchbar';
import IndexBody from './IndexBody';
import Data from '../Data/data';

class Index extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  constructor(props){
    super(props);
    this.token = localStorage.getItem('token');
  }
  isLogged(){
    console.log("checking");
    if(this.token){
      this.props.history.push('/inicio');
    }
  }

  render() {
    const { children } = this.props;

    if(this.token){
      return (
        <div className="Index">
          <Inicio/>
        </div>
      );
    }
    else{
      return (
        <div className="Index">
          <Header/>
          <Searchbar />
        </div>
      );
    }
  }
}

export default Index;
