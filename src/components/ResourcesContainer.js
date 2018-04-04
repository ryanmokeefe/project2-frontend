import React, {Component} from 'react';
// import Resource from './Resource.js'
import ResourcesIndex from './ResourcesIndex.js';
import Form from './Form.js';
import {queryResources} from '../Utils.js';

class ResourceContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            resources: [],
            showForm: false,
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

    showForm = () => {
        this.setState({
            showForm: true
        })
    }


    render() {
        return (
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


export default ResourceContainer
