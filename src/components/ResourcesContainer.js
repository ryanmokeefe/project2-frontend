import React, {Component} from 'react'
import Resource from './Resource.js'
import ResourcesIndex from './ResourcesIndex.js'
import {queryResources} from '../Utils.js'


class ResourceContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            resources: [],
            showOne: false,
            query: '',
            newResource: {
                // add each key from schema
                // each key in schema/state should match value of `name` on each input
                name: null,
                subject: null,
                type: null,
                url: null,
                videos: null,
                exercises: null,
                votes: null
            }
        };
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
            <div>
                {
                    this.state.showOne ? <Resource resources={this.state.resources}/> : <ResourcesIndex resources={this.state.resources}/> 
                }
            </div>
        )
    }

}


export default ResourceContainer
