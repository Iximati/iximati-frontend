import React, { Component } from 'react';

class IndexBody extends Component {

  render() {
    const { children } = this.props;

    return (
      <div className="IndexBody indexBody">
        <h1>Bienvenido</h1>
      </div>
    );
  }
}

export default IndexBody;
