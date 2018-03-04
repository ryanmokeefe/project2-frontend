import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import ResourcesIndex from './components/ResourcesIndex.js';
import Resource from './components/Resource.js';
import Form from './components/Form.js';
import Utils from './Utils.js';
import {Route, Link} from 'react-router-dom';
import {queryResources} from './Utils.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
        current: {},
        resources: [],
        showOne: false,
        query: '',
        newResource: {
            // add each key/value from schema
            // each key in schema/state should match value of `name` on each input
            name: null,
            subject: null,
            type: null,
            url: null,
            videos: null,
            exercises: null,
            votes: null
        }
    }
    // this.toggleDetails = this.toggleDetails.bind(this)
}

  componentDidMount() {
    queryResources()
        .then((data) => 
        this.setState({
            resources: data.data
        }))
  }


  render() {
    return (
        <div className="App">
          <Nav />
          <div>
            <Route path='/resources' component={
              () => (
                <div>
                  <ResourcesIndex resources={this.state.resources} />
                  <Form />
                </div>
              )
            } />
            <Route path='/resources/:name' component={
              (props) => (
                <Resource {...props} resources={this.state.resources}/>
              )
            } />

          </div>
        </div>
    );
  }
}

export default App;
