import React, { Component } from 'react'
import { Dropdown, Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../global/css/Dashboard.css';

import DashboardRouter from './DashboardRouter';

class Dashboard extends Component {

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


  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    console.log(this.props);
    return (

      <div>
        <div>
          <Menu attached='top'>
            <Menu.Item
              name='editorials'
              onClick={this.handleItemClick, this.toggleVisibility}
            >
              <Icon name='sidebar'/>
            </Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item name='logout' onClick={ this.logout } />
            </Menu.Menu>
          </Menu>

          <Segment attached='bottom'>
            <Sidebar.Pushable as={Segment}>
              <Sidebar as={Menu} animation='uncover' width='thin' visible={visible} icon='labeled' vertical inverted>
                <Menu.Item link name='home'>
                  <Icon name='home' />
                  Home
                </Menu.Item>
                <Menu.Item link id='nuevapublicacion' onClick={this.changedisplay} name='gamepad'>
                  <Icon name='gamepad' />
                  Publicaciones
                </Menu.Item>
                <Menu.Item link  id='publicaciones' onClick={this.changedisplay} name='camera'>
                  <Icon name='camera' />
                  Channels
                </Menu.Item>
              </Sidebar>
              <Sidebar.Pusher>
                <Segment basic className='dashboard-content'>
                  <DashboardRouter display={ this.state.display }/>
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>

          </Segment>
        </div>
      </div>
    )
  }
}

export default Dashboard
