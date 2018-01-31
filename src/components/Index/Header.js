import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

import logo from '../global/images/logoblanco.png';
import '../global/css/App.css';


class Header extends Component {

  render() {
    return (
      <div className="Header" >
        <Navbar inverse collapseOnSelect className='dark-primary'>
          <Navbar.Header className='brandlogo'>
            <Navbar.Brand >
              <a href="/"><img alt='' class="logo" src={logo}/></a>
            </Navbar.Brand>
            
          </Navbar.Header>
          
        </Navbar>
      </div>
    );
  }
}

export default Header;


/*

  para agregar menu a la barra de header

  <Navbar.Toggle />


<Navbar.Collapse className='accent'>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Iniciar Sesion
              </NavItem>
              <NavItem eventKey={2} href="#">
                Registrate
              </NavItem>
            </Nav>
          </Navbar.Collapse>
*/