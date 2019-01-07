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
    .then(response => console.log(response)
    )
  }


  render() {
    return (
      <div>
        Something.
      </div>
    )
  }
}

export default App;
