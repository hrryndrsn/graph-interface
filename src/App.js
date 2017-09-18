import React, { Component } from 'react';
import logo from './logo.svg';


import GraphWrapper from './Components/Graph/graph-wrapper'

class App extends Component {
  render() {
    return <GraphWrapper/> // graph data should be passed in as props here 
  }
}

export default App;
