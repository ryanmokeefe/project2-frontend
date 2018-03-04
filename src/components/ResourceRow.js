import React, {Component} from 'react';


class ResourceRow extends Component {
    constructor(props) {
        super(props)
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
