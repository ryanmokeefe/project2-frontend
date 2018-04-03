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
        this.handleName = this.handleName.bind(this)
        this.handleSubject = this.handleSubject.bind(this)
        this.handleType = this.handleType.bind(this)
        this.handleUrl = this.handleUrl.bind(this)
        this.handleVideos = this.handleVideos.bind(this)
        this.handleExercises = this.handleExercises.bind(this)
        
    }

    componentDidMount() {
        queryResources()
            .then((data) => 
            this.setState({
                resources: data.data
            }))
    }

    handleNewPost(){
        axios.put(`${CLIENT_URL}/${this.props.match.params.name}`)
    }

    handleName(e) {
        if (e.target.value) {
            this.setState({
                newResource: Object.assign(this.state.newResource, {name: e.target.value}) 
            })
        }
    }

    handleSubject(e) {
        if (e.target.value) {
            this.setState({
                newResource: Object.assign(this.state.newResource, {subject: e.target.value}) 
            })
        }
    }

    handleType(e) {
        if (e.target.value) {
            this.setState({
                newResource: Object.assign(this.state.newResource, {type: e.target.value}) 
            })
        }
    }

    handleUrl(e) {
        if (e.target.value) {
            this.setState({
                newResource: Object.assign(this.state.newResource, {url: e.target.value}) 
            })
        }
    }

    handleVideos(e) {
        if (e.target.value) {
            this.setState({
                newResource: Object.assign(this.state.newResource, {videos: e.target.value}) 
            })
        }
    }

    handleExercises(e) {
        if (e.target.value) {
            this.setState({
                newResource: Object.assign(this.state.newResource, {exercises: e.target.value}) 
            })
        }
    }



    render() {
        return (
            <div>
                {
                // this.state.showOne ? 
                // <Resource resource={this.state.current}/> : 
                <ResourcesIndex resources={this.state.resources}/> 
                //  onRowClick={(resource) => this.toggleDetails}/> 
                    
                }
                <Form handleName={this.handleName(e)} handleSubject={this.handleSubject(e)} handleType={this.handleType(e)} handleUrl={this.handleUrl(e)} handleVideos={this.handleVideos(e)} handleExercises={this.handleExercises(e)}/>

            </div>
        )
    }

}


export default ResourceContainer
