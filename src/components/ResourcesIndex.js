import React, {Component} from 'react';
import getRequest from '../requests';
// import {object, number} from 'prop-types';


class ResourcesIndex extends Component {

render () { 

   let resourcesList = this.props.resources.map((resource, index) => {
       return(
            <tr>
                <td>
                    <div className="votes">{resource.votes}</div>
                </td>
                <td>
                    <h4>
                        <a href="/resources/{resource.name}">{resource.name}</a> 
                    </h4>    
                </td>
                <td>
                    {resource.subject} 
                </td>
                <td>
                    <a href="{resource.url}">{resource.url}</a>
                </td>
            </tr>
       )
    console.log(resourcesList)
});

// console.log(this.props.resources)

    return(
    // {{!-- hide table for mobile --}}
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
    )
}}


export default ResourcesIndex
