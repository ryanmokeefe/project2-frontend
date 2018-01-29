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
                    <div onClick={this.props.onRowClick}>
                        {/* <a href={"/resources/" + this.props.resource.name}> */}
                        <h4>
                        {this.props.resource.name}
                        </h4>
                        {/* </a>  */}
                    </div>    
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


// const ResourceRow = ({resource, index}) => {
//     return (
//         <tr key={index}>
//             <td>
//                 <div className="votes">{resource.votes}</div>
//             </td>
//             {/* add click event to toggle Resource view: */}
//             <td onClick={this.props.onRowClick}>
//                 <h4>
//                     <a href="/resources/{resource.name}">{resource.name}</a> 
//                 </h4>    
//             </td>
//             <td>
//                 {resource.subject} 
//             </td>
//             <td>
//                 <a href="{resource.url}">{resource.url}</a>
//             </td>
//         </tr>
//     )
// }

export default ResourceRow
