import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import getRequest from '../requests';
// import {object, number} from 'prop-types';
import ResourceRow from './ResourceRow.js';
import Form from './Form.js';

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
            // <ResourceRow resource={resource} index={index} key={index}/>

            <tr key={index}>
                <td>
                    <div className="votes">{resource.votes}</div>
                </td>
                {/* add click event to toggle Resource view: */}
                {/* <td onClick={() => this.props.toggleShowDetails(resource)}> */}
                <td>

                    <h4>
                        <Link to={{
                            pathname: `/resources/${resource.name}`,
                            state: {resource: resource}
                        }}>
                        {/* <a href="/resources/{resource.name}"> */}
                        {resource.name}
                        {/* </a>  */}
                        </Link>
                    </h4>    
                </td>
                <td>
                    {resource.subject} 
                </td>
                <td>
                    <a href={resource.url}>{resource.url}</a>
                </td>
            </tr>
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

        <Form />

    </div>
    )
}}


export default ResourcesIndex
