import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import ResourcesContainer from './components/ResourcesContainer.js';
import Resource from './components/Resource.js';
import Welcome from './components/Welcome.js';
import { Route, Switch } from 'react-router-dom';
import { queryResources } from './Utils.js'
import './styles.css';


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
}

  componentDidMount() {
    queryResources()
        .then((data) => 
        this.setState({
            resources: data.data
        })
      )
  }


  render() {
    return (
        <div className='App'>
        <Nav />
        <main>
          <Switch>
            <Route exact path='/'                  render={()      => (<Welcome />)}/>
            <Route exact path='/resources'         render={(props) => (<ResourcesContainer {...props} resources={this.state.resources} />)}/>
            
            <Route path='/resources/:name'        render={(props) => (<Resource {...props}/>)} resources={this.state.resources}  />
            
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
