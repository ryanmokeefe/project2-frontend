import React from 'react'
import {object, number} from 'prop-types'

const Resource = (resource) => {
    
    return (
        <div>

        <table className="fullscreen z-depth-5 highlight">
            <thead>
                <tr>
                    <th className="tableSingle"><div className="name">
                    <h2>{resource.name}</h2></div>
                    </th> 
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                <div className="infoRow url">
                    <a href="{resource.url}"><h4>{resource.url}</h4></a>
                </div>
                </td>        
            </tr>
            <tr>
                <td className="infoRow">

                {/* {{!-- <div className="wholeRow subject"> --}} */}
                    <p className="singleInfo">
                    <span className="singleDesc">Subject:</span>
                    {resource.subject}
                </p>
                {/* {{!-- </div> --}} */}
                </td>        
            </tr>
            <tr>
                
                <td className="infoRow">
                <div className="wholeRow type">
                    <p className="singleInfo">
                    <span className="singleDesc">Type:</span>
                    {resource.type}
                </p>
                </div>
                </td>       
            </tr>
            <tr>

                <td className="infoRow">
                <div className="wholeRow videos">
                    <p className="singleInfo">
                    <span className="singleDesc">Videos:</span>
                    {resource.videos}
                    </p>
                </div>
                </td>  
            </tr>
            <tr>

                <td className="infoRow">
                <div className="wholeRow exercise">
                    <p className="singleInfo">
                    <span className="singleDesc">Exercises:</span>
                    {resource.exercises}
                </p>
                </div>
                </td>  
            </tr>
            <tr>
                <td className="infoRow">
                <div className="center">
                    <button id="voteUp" className="voteButton z-depth-3">Like</button>
                    <button id="voteDown" className="voteButton z-depth-3">Dislike</button>
                </div>
                <div className="votes">{resource.votes}</div>

                </td>  
            </tr>

            </tbody>
        </table>

        </div>

    )
}


export default Resource
