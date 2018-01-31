import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Footer from './global/Footer';
import Content from './global/Content';
import Data from './Data/data';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <div className="App">
        <head><title>{Data.title}</title></head>
        <Content body={children} />
        <Footer/>
      </div>
    );
  }
}

export default App;
