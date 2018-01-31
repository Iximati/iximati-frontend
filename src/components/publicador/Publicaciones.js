import React, { Component } from 'react';

import NewPublication from './NewPublication';
import '../global/css/App.css';



class Publicaciones extends Component {

  constructor(props){
    super(props);

    this.changedisplay = this.changedisplay.bind(this);


  }

  changedisplay(e){
    var view = e.target.id;

    this.setState({display: view});
  }

  render() {
    return (
      <div className="Publicaciones" >
        <div className= 'publicaciones'>
          <ul class="collection with-Publicaciones">
            <li class="collection-Publicaciones"><h4>Publicaciones</h4></li>
            <li class="collection-item"><div>Publicacion<a href="#!" class="secondary-content"><i class="material-icons text">edit</i></a></div></li>
            <li class="collection-item"><div>Publicacion<a href="#!" class="secondary-content"><i class="material-icons text">edit</i></a></div></li>
            <li class="collection-item"><div>Publicacion<a href="#!" class="secondary-content"><i class="material-icons text">edit</i></a></div></li>
            <li class="collection-item"><div>Publicacion<a href="#!" class="secondary-content"><i class="material-icons text">edit</i></a></div></li>
          </ul>
        </div> 
      </div>
    );
  }
}
/*

<div class="right-align">
            <a class="btn-floating btn-large  waves-effect waves-light red" onClick={this.changedisplay} name='nuevapublicacion'><i class="material-icons" id='nuevapublicacion'>add</i></a>
          </div>
*/

export default Publicaciones;
