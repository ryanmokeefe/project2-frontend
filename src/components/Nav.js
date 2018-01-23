import React from 'react'

const Nav = () => {
    return (
        <nav className="nav-extended">
              
        <div className="nav-wrapper">
          <div className="nav-left left">
            <a href="#!" className="brand-logo">AR[ ]</a>
              <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          </div>        
          <ul className="right hide-on-med-and-down">
            {/* {{#if currentUser}}
              <li><a href="/logout">Logout {{currentUser.local.email}}</a></li>
            {{else}}
              <li><a href="/login">Login</a></li>
              <li><a href="/signup">Signup</a></li>
            {{/if}}  
            <li><a href="/profile">Profile</a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            {{#if currentUser}}
              <li><a href="/logout">Logout {{currentUser.local.email}}</a></li>
            {{else}}
              <li><a href="/login">Login</a></li>
              <li><a href="/signup">Signup</a></li>
            {{/if}}  
            <li><a href="/profile">Profile</a></li> */}
          </ul>

        </div>

        <div className="nav-wrapper navpart-2">                
          <h1 className="center">
            <a className="header-ar center" href="/">
            <span className="bracket"> {'{'} </span>
            Additional Resources 
            <span className="bracket"> }</span>
            </a>
          </h1>
        </div>

        <div className="nav-content">
          <ul className="">
            <li className="nav-bottom">
              <button className="wasA" href="/#1">
      {/* {{!-- 1. dropdown menu for search --}} */}
                <a id="navMenu1" className='dropdown-button searchBtn' href='#' data-activates='dropdown1'>Sort by:</a>
                  {/* <!-- Dropdown Structure --> */}
                  <ul id='dropdown1' className='dropdown-content'>
                    <li><a href="/search/videos">Videos</a></li>
                    <li><a href="/search/exercises">Exercises</a></li>
                    <li><a href="/search/both">Both</a></li>
                    <li className="divider"></li>
                    <li><a href="/resources">All</a></li>
                  </ul>
              </button>
            </li>
      {/* {{!-- 2. dropdown for search: type --}} */}
            <li className="nav-bottom">
              <button className="wasA active" href="#2">
                <a id="navMenu2" className='dropdown-button searchBtn' href='2' data-activates='dropdown2'>Find by type:</a>
                  {/* <!-- Dropdown Structure --> */}
                  <ul id='dropdown2' className='dropdown-content'>
                    <li><a href="/search/articles">Articles</a></li>
                    <li><a href="/search/lessons">Lessons</a></li>
                    <li><a href="/search/documentation">Documentation</a></li>
                    <li><a href="/search/podcasts">Podcasts</a></li>
                    <li><a href="/search/lectures">Lectures</a></li>
                  </ul>                
              </button>
            </li>

      {/* {{!-- 3. nav tab tbd --}} */}
            <li className="nav-bottom"><a href="#test3">
              
              </a>
            </li>

      {/* {{!-- 4. nav tab tbd --}} */}
            <li className="nav-bottom">

            </li>
          </ul>
          
    {/* {{!-- search bar: --}} */}
          <div className="searchBox">
            <input action="/search" className="searchBoxInput" type="text" placeholder="Search site" />

          </div>

        </div>
      </nav>


)}

export default Nav
