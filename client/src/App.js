import React, { Component } from 'react';
import './App.css';
import fetch from 'isomorphic-fetch'

class App extends Component {

  constructor() {
    super()
    this.message = ""
  }

  componentDidMount() {
    this.getAPIMessage()
  }

  getAPIMessage = () => {
    fetch(`/api/getMessage`)
    .then(response => response.json())
    .then(response => console.log(response))
    // this.setState((state) => {return {message: response}}))
  }

  render() {
    return (
      <div>
        <p> Something.</p>
        <p> Message from API: {this.message} </p>
      </div>
    )
  }
}

export default App;
