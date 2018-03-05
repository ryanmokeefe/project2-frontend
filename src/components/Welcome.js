import React, { Component } from 'react';
import Nav from './Nav.js';

class Welcome extends Component {
    
    render () {
        return (
            <div>
            <div className="carousel carousel-slider center" data-indicators="true">
                <div className="carousel-fixed-item center">
                <a className="enterButton btn waves-effect white grey-text darken-text-2" href="/resources">ENTER</a>
                </div>
                <div className="carousel-item car1 white-text" href="#one!">
                <h2></h2>
                <p className="white-text"></p>
                </div>
                <div className="carousel-item car2 white-text" href="#two!">
                <h2></h2>
                <p className="white-text"></p>
                </div>
                <div className="carousel-item car3 white-text" href="#three!">
                <h2></h2>
                <p className="white-text"></p>
                </div>
                <div className="carousel-item car4 blue white-text" href="#four!">
                <h2 className="h2car">All the resources you need, in one spot.</h2>
                <p className="">Find, Share, Rate, Learn</p>
                </div>
            </div>


            <h2 class="center"><a href="/resources">Find resources for any topic!</a></h2>



            </div>
        )
    }
}

export default Welcome
