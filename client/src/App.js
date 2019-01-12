import React, { Component } from 'react';
import './App.css';
import fetch from 'isomorphic-fetch'
import TestContainer from './components_container/testContainer'

class App extends Component {

  constructor() {
    super()
    this.message = "Sup."
  }

  componentDidMount() {
    this.getAPIMessage()
  }

  getAPIMessage = () => {
    fetch(`/api/getMessage`)
    .then(response => response.json())
    .then(response => console.log(response))
    }

  render() {
    return (
      <div>
        <p> Something.</p>
        <p> Message: {this.message} </p>
        < TestContainer/>
      </div>
    )
  }
}

export default App;
