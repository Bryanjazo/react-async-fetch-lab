// create your App component here

import React, { Component } from 'react'

class App extends Component {

  state = {
    peoplaInSpace: []
  }

  render(){
    return(
      <div>
      {this.state.peoplaInSpace.map(person => person.name)}
    </div>
    )
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => {
      this.setState({
        peoplaInSpace: data.people
      })
    })
  }
}

export default App;
