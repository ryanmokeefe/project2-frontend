import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import ResourcesIndex from './components/ResourcesIndex.js';
import Resource from './components/Resource.js';
// import Form from './components/Form.js';
import Welcome from './components/Welcome.js';
import Utils from './Utils.js';
import {Route, Switch, Link} from 'react-router-dom';
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
        // console.log(data)
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
            <Route exact path='/resources'         render={(props) => (<ResourcesIndex {...props} resources={this.state.resources} />)}/>
            {/* <Route exact path='/resources/add'     render={()      => (<ResourceAdd />)} /> */}
            {/* <Route path='/resources/:title/edit'   render={(props) => (<ResourceEdit {...props} />)} /> */}
            <Route path='/resources/:name'        render={(props) => (<Resource {...props}/>)} resources={this.state.resources}  />
            {/* <Route exact path='/users'         render={()      => (<UserAuth />)} /> */}
            {/* <Route path='/*' render={() => (<Landing />)} /> */}
          </Switch>
        </main>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
