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
    .then(response => conole.log(response)
    )
  }

  
  render() {
    return (

    )
  }
}

export default App;
