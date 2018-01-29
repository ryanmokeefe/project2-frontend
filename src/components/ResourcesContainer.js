import React, {Component} from 'react'
import Resource from './Resource.js'
import ResourcesIndex from './ResourcesIndex.js'
import {queryResources} from '../Utils.js'


class ResourceContainer extends Component {
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
        this.toggleDetails = this.toggleDetails.bind(this)
    }

    componentDidMount() {
        queryResources()
            .then((data) => 
            this.setState({
                resources: data.data
            }))
    }

    toggleDetails(resource) {
        this.setState = {
            showOne: true,
            current: resource
        }
        console.log(this.state.current)
    }    

    render() {
        return (
            <div>
                {
                    this.state.showOne ? <Resource resource={this.state.current}/> : <ResourcesIndex onRowClick={(resource) => this.toggleDetails} resources={this.state.resources}/> 
                }
            </div>
        )
    }

}


export default ResourceContainer
