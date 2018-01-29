import React, {Component} from 'react';
// import getRequest from '../requests';
// import {object, number} from 'prop-types';
import ResourceRow from './ResourceRow.js'

class ResourcesIndex extends Component {
    constructor(props){
        super(props)
    }



render () { 
    // console.log('render ResourceIndex: ' + this.props)
    let resourcesList = this.props.resources.map((resource, index) => {
        return(
            <ResourceRow onRowClick={() => this.props.onRowClick(resource)} resource={resource} index={index} key={index}/>

            // <tr key={index}>
            //     <td>
            //         <div className="votes">{resource.votes}</div>
            //     </td>
            //     {/* add click event to toggle Resource view: */}
            //     <td onClick={() => this.props.toggleShowDetails(resource)}>
            //         <h4>
            //             <a href="/resources/{resource.name}">{resource.name}</a> 
            //         </h4>    
            //     </td>
            //     <td>
            //         {resource.subject} 
            //     </td>
            //     <td>
            //         <a href="{resource.url}">{resource.url}</a>
            //     </td>
            // </tr>
       )
    });


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
