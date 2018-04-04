import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import CLIENT_URL from '../constants.js';
import axios from 'axios';

class DeleteButton extends Component {
    constructor(props){
        super(props)
        this.state = {
            redirect: false
        }
    }

    handleDelete = () => {
        axios.delete(`${CLIENT_URL}/${this.props.resource.name}`)
        setTimeout(this.setState({redirect: true}), 2000)
    }

    render() {
        if (this.state.redirect === true) {
            return <Redirect to={{ pathname: '/resources' }} />
        }

        return (
            // <Link to='/resources'>
            

            <input className="z-depth-5 submit" type="button" value="Remove Resource" onClick={this.handleDelete}/>
             
            // </Link>
        )
}

}

export default DeleteButton
