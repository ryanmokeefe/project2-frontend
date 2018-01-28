import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js'
import ResourcesContainer from './components/ResourcesContainer.js'
import Form from './components/Form.js'
import Utils from './Utils.js'

class App extends Component {

  componentDidMount() {
    // ajax/axios request:
    // axios.get('Utils')
    // .then(response => this.setState({
    //   resources: response.data
    // }))
    console.log('DID mount request')
  }

  render() {
    return (
        <div className="App">
          <Nav />
          <ResourcesContainer />
          <Form />
        </div>
    );
  }
}

export default App;
