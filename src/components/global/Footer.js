import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './css/App.css';


class Footer extends Component {

  render() {
    return (
      <div className="Footer">
        <footer className="page-footer primary">
          <div className="container content-footer">
            <div className="row">
              <div className="col-lg-6 col-sm-12 ">
                <h4 className="white-text">
                  El Proyecto
                </h4>          
                <p className="white-text">
                  El Objetivo principal de este proyecto es crear interés por la Ciencia, concentrando articulos científicos y de divulgación escritos por Científicos Mexicanos para facilitar el acceso a ellos y asi contribuir a la Cultura Científica en el pais. 
                </p>
              </div>   
              <div className="col-lg-6 col-xs-12 col-md-12">        
                <div className='footer-links'>
                  <ul>
                    <li>
                      <a className="white-text" href="#!">
                        Condiciones de Uso
                      </a>
                    </li>
                    <li>
                      <a className="white-text" href="#!">
                        Contacto
                      </a>
                    </li>           
                    <li>
                      <Link to= '/login'>
                        Publicadores
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-xs-12 col-md-12">
                
              </div> 
            </div>
          </div>    
          <div className="dark-primary footer-copyright">
            <div className="container">
              Hecho en México 
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
