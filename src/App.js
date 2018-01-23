import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js'
import ResourcesContainer from './components/ResourcesContainer.js'
import Form from './components/Form.js'


class App extends Component {

  componentDidMount() {
    // ajax/axios request:
    // getRequest.then(response => this.setState({
    //   resources: response.data
    // }))
    console.log('request')
  }

  render() {
    return (
      <html lang="en">
      <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css" />
          <link rel="stylesheet" type="text/css" href="./index.css" />
            
          <title>Additional Resources</title>
      </head>
      <body>

        <div className="App">
          <Nav />
          <ResourcesContainer />
          <Form />
        </div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>

        <script src="./script.js"></script>
      </body>
      </html>
    );
  }
}

export default App;
