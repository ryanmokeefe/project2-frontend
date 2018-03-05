import React, {Component} from 'react';
import {queryResources} from '../Utils.js'


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
        return (
            <tr >
                <td>
                    <div className="votes">{this.props.resource.votes}</div>
                </td>
                {/* add click event to toggle Resource view: */}
                <td >
                        <a href={"/resources/" + this.props.resource.name}>
                        <h4>
                        {this.props.resource.name}
                        </h4>
                        </a> 
                </td>
                <td>
                    {this.props.resource.subject} 
                </td>
                <td>
                    <a href={this.props.resource.url}>{this.props.resource.url}</a>
                </td>
            </tr>
        )
    }

}


export default ResourceRow
