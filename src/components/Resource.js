import React, { Component } from 'react';
import UpdateForm from './UpdateForm.js';
import DeleteButton from './DeleteButton.js';
import CLIENT_URL from '../constants.js';
import axios from 'axios';

class Resource extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showForm: false,
            resource: {},
            updatedResource: {
                name: null,
                subject: null,
                type: null,
                url: null,
                videos: null,
                exercises: null,
                votes: null
            }
        }
        this.hideForm = this.hideForm.bind(this)
    }

    componentDidMount() {
        axios.get(`${CLIENT_URL}/${this.props.match.params.name}`)
            .then(res => {
                this.setState({
                    resource: res.data
                })
            })
    }

    showForm = () => {
        this.setState({
            showForm: true
        })
    }

    hideForm = () => {
        this.setState({
            showForm: false
        })
    }

    upVote = () => {
        let total = this.state.resource.votes + 1
        this.setState({
            resource: Object.assign(this.state.resource, {votes: total}) 
        })
        axios.put(`${CLIENT_URL}/${this.state.resource.name}`, {resource: this.state.resource})
        
    }

    render() {
        
            console.log(this.state.resource)

            return (

            <div>

            <table className="fullscreen z-depth-5 highlight">
                <thead>
                    <tr>
                        <th className="tableSingle"><div className="name">
                        <h2>{this.state.resource.name}</h2></div>
                        </th> 
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                    <div className="infoRow url">
                        <a href="{this.state.resource.url}"><h4>{this.state.resource.url}</h4></a>
                    </div>
                    </td>        
                </tr>
                <tr>
                    <td className="infoRow">

                        <p className="singleInfo">
                        <span className="singleDesc">Subject:</span>
                        {this.state.resource.subject}
                    </p>
                    </td>        
                </tr>
                <tr>
                    
                    <td className="infoRow">
                    <div className="wholeRow type">
                        <p className="singleInfo">
                        <span className="singleDesc">Type:</span>
                        {this.state.resource.type}
                    </p>
                    </div>
                    </td>       
                </tr>
                <tr>

                    <td className="infoRow">
                    <div className="wholeRow videos">
                        <p className="singleInfo">
                        <span className="singleDesc">Videos:</span>
                        {this.state.resource.videos}
                        </p>
                    </div>
                    </td>  
                </tr>
                <tr>

                    <td className="infoRow">
                    <div className="wholeRow exercise">
                        <p className="singleInfo">
                        <span className="singleDesc">Exercises:</span>
                        {this.state.resource.exercises}
                    </p>
                    </div>
                    </td>  
                </tr>
                <tr className="voteRow">
                    <td className="infoRow">
                    <div className="center">
    {/* add vote state change onClick */}
                        <button id="voteUp" className="voteButton z-depth-3" onClick={this.upVote} >Like</button>
                        
                    </div>
                    <div className="votes">{this.state.resource.votes}</div>

                    </td>  
                </tr>

                </tbody>
            </table>
                
            {
                this.state.showForm ? 
                <UpdateForm resource={this.state.resource} hideForm={this.hideForm} /> : < div> <button className="z-depth-5 submit" onClick={this.showForm}>Update Resource</button> 
                <DeleteButton  resource={this.state.resource}/> </div>     
            }

            </div>

    )}
}


export default Resource
