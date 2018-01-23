import React, {Component} from 'react'
class Form extends Component {
    render() {
        return (
            <form action="/resources" method="post">
            <input className="input-field row center" type="text" name="resource[name]" placeholder="Title" />
            <input className="input-field row center" type="text" name="resource[subject]" placeholder="Subject" />
            <input className="input-field row center" type="text" name="resource[url]" placeholder="Website Url" />

        {/*  */}

            <select className="input-field row selections-box" name="resource[type]" >
              <option value="" disabled selected>What type of link is this?:</option>
              <option placeholder="Lesson" value="Lesson">Lesson</option>
              <option placeholder="Article" value="Article">Article</option>
              <option placeholder="Lecture" value="Lecture">Lecture</option>
              <option placeholder="Documentation" value="Documentation">Documentation</option>
              <option placeholder="Podcast" value="Podcast">Podcast</option>
            </select>

        {/*  */}

            <select className="input-field row selections-box" name="resource[videos]">
              <option value="" disabled selected>Videos?</option>
              <option placeholder="Yes" value="Yes">Yes</option>
              <option placeholder="No" value="No">No</option>
            </select>
        
        {/*  */}
    
            <select className="input-field row selections-box" name="resource[exercises]">
              <option value="" disabled selected>Exercises?</option>
              <option placeholder="Yes" value="Yes">Yes</option>
              <option placeholder="No" value="No">No</option>
            </select>
        
        {/*  */}
        
        
            <input className="z-depth-5 submit" type="submit" value="Upload Resource" />
        </form>
    )}
}
export default Form
