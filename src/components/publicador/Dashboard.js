import React, { Component } from 'react';


import NewPublication from './NewPublication';
import Publicaciones from './Publicaciones';

import '../global/css/Dashboard.css';

class Dashboard extends Component {
  constructor(props){
    super(props);

  }

  render() {
    var display = this.props.display;
    
    if(display === 'publicaciones' || display === 'inicio' ){
      return <Publicaciones display='publicaciones'/>;
    }
    if(display === 'nuevapublicacion'){
      return  <NewPublication/> ;
    }
    
  }
}

export default Dashboard;