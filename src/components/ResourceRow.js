import React, {Component} from 'react';
import {queryResources} from '../Utils.js'
import { Link } from 'react-router-dom';

class ResourceRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resources: []
        }
    }

    componentDidMount() {
        queryResources()
            .then((data) => 
            this.setState({
                resources: data.data
            }))
    }

    render() {
        const resource = this.props.resource;
        return (
            <tr >
                <td>
                    <div className="votes">{resource.votes}</div>
                </td>
                {/* add click event to toggle Resource view: */}
                <td >

                    <Link to={{
                        pathname: `/resources/${resource.name}`,
                        props: {resource: resource}
                        }}>
                        {resource.name}
                    </Link>

                        {/* <a href={"/resources/" + this.props.resource.name}>
                        <h4>
                        {this.props.resource.name}
                        </h4>
                        </a>  */}
                </td>
                <td>
                    {resource.subject} 
                </td>
                <td>
                    <a href={resource.url}>{resource.url}</a>
                </td>
            </tr>
        )
    }

}


export default ResourceRow
