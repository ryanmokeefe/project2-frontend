import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import getRequest from '../requests';
// import {object, number} from 'prop-types';
import ResourceRow from './ResourceRow.js';

class ResourcesIndex extends Component {
    constructor(props){
        super(props)
    }

componentDidMount() {
    this.setState({
        resources: this.props.resources
    })
}

render () { 
    // console.log('render ResourceIndex: ' + this.props)
    let resourcesList = this.props.resources.map((resource, index) => {
        return(
            <ResourceRow resource={resource} index={index} key={index}/>
       )
    });


    return(
    // {{!-- hide table for mobile --}}
    <div>
    <table className="fullscreen z-depth-5 highlight">
        <thead>
            <tr>
                <th className="center">Rating</th>
                <th className="center">Name</th>
                <th className="center">Subject</th>
                <th className="center">Website</th>
            </tr>
        </thead>
        <tbody>

        {resourcesList}

    </tbody>
    </table>

    </div>
    )
}}


export default ResourcesIndex
