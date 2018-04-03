import React, {Component} from 'react';

class UpdateForm extends Component {
    render() {
        // each <input>'s name attribute/prop should match a key in state
        return (
            <form action="/resources" method="put">
            <input className="input-field row center" type="text" name="resource[name]" placeholder="Title" />
            <input className="input-field row center" type="text" name="resource[subject]" placeholder="Subject" />
            <input className="input-field row center" type="text" name="resource[url]" placeholder="Website Url" />

        {/*  */}

            <select className="input-field row selections-box" name="resource[type]" >
              <option value="" disabled defaultValue>What type of link is this?:</option>
              <option placeholder="Lesson" value="Lesson">Lesson</option>
              <option placeholder="Article" value="Article">Article</option>
              <option placeholder="Lecture" value="Lecture">Lecture</option>
              <option placeholder="Documentation" value="Documentation">Documentation</option>
              <option placeholder="Podcast" value="Podcast">Podcast</option>
            </select>

        {/*  */}

            <select className="input-field row selections-box" name="resource[videos]">
              <option value="" disabled defaultValue>Videos?</option>
              <option placeholder="Yes" value="Yes">Yes</option>
              <option placeholder="No" value="No">No</option>
            </select>
        
        {/*  */}
    
            <select className="input-field row selections-box" name="resource[exercises]">
              <option value="" disabled defaultValue>Exercises?</option>
              <option placeholder="Yes" value="Yes">Yes</option>
              <option placeholder="No" value="No">No</option>
            </select>
        
        {/*  */}
        
        
            <input className="z-depth-5 submit" type="submit" value="Update Resource" />

            <input className="z-depth-5 submit" type="delete" value="Remove Resource" />
        </form>
    )}
}
export default UpdateForm