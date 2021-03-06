import React, {Component} from 'react';
import DeleteButton from './DeleteButton.js';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import CLIENT_URL from '../constants.js';
import {queryResources} from '../Utils.js';


class UpdateForm extends Component {
    constructor(props){
        super(props)
            this.state = {
                show: false,
                original: {},
                resource: { 
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
        axios.get(`${CLIENT_URL}/${this.props.resource.name}`)
        .then(res => {
            this.setState({
                original: res.data
            })
        })
        this.setState({
            resource: this.props.resource,
        })
        setTimeout(console.log(this.state.resource), 3000)
    }

    handleSubmit = () => {
        axios.put(`${CLIENT_URL}/${this.state.original.name}`, {resource: this.state.resource})
        .then(() => {
            setTimeout(queryResources(), 2000)
            setTimeout(this.props.hideForm, 3000)
            setTimeout(() => this.setState({show: true}), 2000)
        })     
        .catch(err => console.log('Woops!', err))
    }

    handleName = (e) => {
        if (e.target.value) {
            this.setState({
                resource: Object.assign(this.state.resource, {name: e.target.value}) 
            })
        }
    }

    handleSubject = (e) => {
        if (e.target.value) {
            this.setState({
                resource: Object.assign(this.state.resource, {subject: e.target.value}) 
            })
            console.log(this.state.resource)
        }
    }

    handleType = (e) => {
        if (e.target.value) {
            this.setState({
                resource: Object.assign(this.state.resource, {type: e.target.value}) 
            })
        }
    }

    handleUrl = (e) => {
        if (e.target.value) {
            this.setState({
                resource: Object.assign(this.state.resource, {url: e.target.value}) 
            })
        }
    }

    handleVideos = (e) => {
        if (e.target.value) {
            this.setState({
                resource: Object.assign(this.state.resource, {videos: e.target.value}) 
            })
        }
    }

    handleExercises = (e) => {
        if (e.target.value) {
            this.setState({
                resource: Object.assign(this.state.resource, {exercises: e.target.value}) 
            })
        }
    }


    render() {
        if (this.state.show === true) {
          return <Redirect to={{
            pathname: `/resources/${this.state.resource.name}`,
          }}/>
        }
        return (
            <form action="/resources" method="put">

            <input className="input-field row center" type="text" placeholder="Title" onChange={this.handleName}/>
            <input className="input-field row center" type="text" placeholder="Subject" onChange={this.handleSubject}/>
            <input className="input-field row center" type="text" placeholder="Website Url" onChange={this.handleUrl}/>

        {/*  */}

            <select className="input-field row selections-box" onChange={this.handleType}>
              <option value="" defaultValue>What type of link is this?:</option>
              <option placeholder="Lesson" value="Lesson">Lesson</option>
              <option placeholder="Article" value="Article">Article</option>
              <option placeholder="Lecture" value="Lecture">Lecture</option>
              <option placeholder="Documentation" value="Documentation">Documentation</option>
              <option placeholder="Podcast" value="Podcast">Podcast</option>
            </select>

        {/*  */}

            <select className="input-field row selections-box" onChange={this.handleVideos}>
              <option value="" defaultValue>Videos?</option>
              <option placeholder="Yes" value="Yes">Yes</option>
              <option placeholder="No" value="No">No</option>
            </select>
        
        {/*  */}
    
            <select className="input-field row selections-box" onChange={this.handleExercises}>
              <option value="" defaultValue>Exercises?</option>
              <option placeholder="Yes" value="Yes">Yes</option>
              <option placeholder="No" value="No">No</option>
            </select>
        
        {/*  */}
        
            <input className="z-depth-5 submit" type="submit" value="Update Resource"  onClick={this.handleSubmit}/>
            <DeleteButton resource={this.props.resource}/>
            
        </form>
    )}
}
export default UpdateForm
