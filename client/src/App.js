import React, { Component } from 'react';
import './App.css';
import fetch from 'isomorphic-fetch'

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
        <p> {this.message} </p>
      </div>
    )
  }
}

export default App;
