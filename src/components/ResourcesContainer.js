import React, {Component} from 'react';
// import Resource from './Resource.js'
import ResourcesIndex from './ResourcesIndex.js';
import Form from './Form.js';
import {queryResources} from '../Utils.js';
import CLIENT_URL from '../constants.js';
import axios from 'axios';


class ResourceContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            // current: {},
            resources: [],
            showForm: false,
            // query: '',
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
            }))
    }

    componentWillReceiveProps() {
        console.log(this.state.newResource)
    }

    showForm = () => {
        this.setState({
            showForm: true
        })
    }


    render() {
        return (
            <div>
                <button onClick={this.showForm}>Upload A Link</button>
                {
                this.state.showForm ? 
                <Form /> : 
                <ResourcesIndex resources={this.state.resources}/>     
                }

            </div>
        )
    }

}


export default ResourceContainer
