import React, { Component } from 'react';
import ResourcesIndex from './ResourcesIndex.js';
import Form from './Form.js';
// import { CLIENT_URL } from '../constants.js';
import axios from 'axios';


class Search extends Component {
    constructor(){
        super()
        this.state = {
            resources: []
        }
    }

    componentDidMount() {
        // queryResources()
        axios.get(`http://localhost:4000/search/${this.props.match.params.type}`)
            .then((data) => 
            this.setState({
                resources: data.data
            }))
            console.log(this.state.resources)
    }

    showForm = () => {
        this.setState({
            showForm: true
        })
    }

    render() {
        return(
            <div>
                <button className="z-depth-5 submit" onClick={this.showForm}>Upload A Link</button>
                {
                this.state.showForm ? 
                <Form /> : 
                <ResourcesIndex resources={this.state.resources}/>     
                }

            </div>
        )
    }
}

export default Search
