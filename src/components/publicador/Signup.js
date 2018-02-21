import React, { Component } from 'react';
import { Form, Dropdown, Input, Grid, Button} from 'semantic-ui-react';
import fetch from 'isomorphic-fetch';

import Data from '../Data/data';

import '../global/css/App.css';

class Signup extends Component {

  constructor(props){
    super(props);
    this.options = [
      { key: '@azc.uam.mx', text: '@azc.uam.mx', value: '@azc.uam.mx' },
      { key: '@xoc.uam.mx', text: '@xoc.uam.mx', value: '@xoc.uam.mx' },
      { key: '@izt.uam.mx', text: '@izt.uam.mx', value: '@izt.uam.mx' },
      { key: '@unam.mx', text: '@unam.mx', value: '@unam.mx' }
    ];
    this.state = {
      correo: '',
      password: '',
      message: ''
    };


    this.handleChanges = this.handleChanges.bind(this);
    this.handleDomain = this.handleDomain.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChanges(event, {value}) {
    const target = event.target;
    console.log(value);
    console.log(event);
    if(target.name === 'nombre'){
      this.setState({nombre : target.value});
    }
    if(target.name === 'apellido'){
      this.setState({apellido : target.value});
    }
    if(target.name === 'password'){
      this.setState({password : target.value});
    }
    if(target.name === 'correo' ){
      this.setState({correo : target.value});
    }
    if(target.name === 'dominiocorreo'){
      console.log(event);
      this.setState({domcorreo : target.value});
    }
    console.log(this.state);
  }
  handleDomain(event, {value}) {
    console.log(value);  
    this.setState({domcorreo : value});
    console.log(this.state);
  }

  handleSubmit(event) {
    
    var data = this.state;
    console.log(data);
    if(data && data.nombre == null){
      var element = document.getElementById('nombre');
      element.classList.add("error");
    }
    this.state.correo = this.state.correo + this.state.domcorreo;
    
    fetch(  
      Data.api + '/publicador', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      console.log(res);
      if(res.status === 400){
        res.json().then(data => {
          this.setState({message: data.message});
        });
      }
      if(res.status === 201){
        res.json().then(data => {
          localStorage.setItem('token', data.token);
          this.props.history.push('/');
        });
      }

    }).catch(err => {
      console.log(err);
      throw (err);
    });

    event.preventDefault();
  } 
  render() {
    
    return(
      <div className='Signup'>
        <Grid celled='internally'>
          <Grid.Row>
            <Grid.Column width={3}>
            </Grid.Column>
            <Grid.Column width={10}>
              <div className='center error'>
                {this.state.message}
              </div>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                  <Form.Input fluid label='Nombre' placeholder='Nombre' id='nombre' name='nombre' onChange = { this.handleChanges } />
                  <Form.Input fluid label='Apellido' placeholder='Apellido' id='apellido' name='apellido' onChange = { this.handleChanges }/>
                </Form.Group>
                <Form.Group >
                  <Form.Input fluid label='Contraseña'  type='password' onChange = { this.handleChanges } id='password' name="password" placeholder='Contraseña' width='5'/>
                </Form.Group>
                <Form.Group>
                  <Input
                    label={<Dropdown defaultValue='@azc.uam.mx' name='dominiocorreo' options={this.options} onChange={this.handleDomain}/>}
                    labelPosition='right'
                    placeholder='Correo institucional'
                    id='correo'
                    name="correo"
                    onChange = { this.handleChanges }
                  />
                </Form.Group>
                <Button type='submit'>Enviar</Button>
              </Form>
            </Grid.Column>
            <Grid.Column width={3}>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )

  }
}

export default Signup;