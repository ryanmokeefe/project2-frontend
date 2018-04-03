import React, { Component } from 'react';
import UpdateForm from './UpdateForm.js';
// import {queryResources} from '../Utils.js';
import CLIENT_URL from '../constants.js';
import axios from 'axios';

class Resource extends Component {
    constructor(props) {
        super(props)
        this.state = {
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

    }

    componentDidMount() {
        axios.get(`${CLIENT_URL}/${this.props.match.params.name}`)
            .then(res => {
                this.setState({
                    resource: res.data
                })
            })
    }

    handleUpdate() {

    }

    handleDelete() {
        
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

                    {/* {{!-- <div className="wholeRow subject"> --}} */}
                        <p className="singleInfo">
                        <span className="singleDesc">Subject:</span>
                        {this.state.resource.subject}
                    </p>
                    {/* {{!-- </div> --}} */}
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
                <tr>
                    <td className="infoRow">
                    <div className="center">
                        <button id="voteUp" className="voteButton z-depth-3">Like</button>
                        <button id="voteDown" className="voteButton z-depth-3">Dislike</button>
                    </div>
                    <div className="votes">{this.state.resource.votes}</div>

                    </td>  
                </tr>

                </tbody>
            </table>
                <UpdateForm />
            </div>

    )}
}


export default Resource
