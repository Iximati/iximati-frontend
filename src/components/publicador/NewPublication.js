import React, { Component } from 'react';

import '../global/css/App.css';



class NewPublication extends Component {

  constructor(props){
    super(props);

  }

  render() {
    return (
      <div className="NewPublication" >
        <h3>Nueva Publicación</h3>
        <div>
        <div className="input-field col s12">
              <input  id="titulo" type="text" className="validate" />
              <label for="titulo">Título</label>
            </div>
            <div className="input-field col s12">
              <input id="tema" type="text" className="validate" />
              <label for="tema">Tema</label>
            </div>
        </div>
        <div className="row">
          <form>
            <div className="input-field col s12">
              <select>
                <option value="" disabled selected>Idioma</option>
                <option value="1">Español</option>
                <option value="2">Inglés</option>
                <option value="3">Francés</option>
              </select>
              <label>Idioma</label>
            </div>

            <form>
            <div class="file-field input-field">
              <div class="btn">
                <span>File</span>
                <input type="file" />
              </div>
              <div class="file-path-wrapper">
                <input class="file-path validate" type="text" />
              </div>
            </div>
            </form>

          </form>
        </div>
      </div>
    );
  }
}

export default NewPublication;
