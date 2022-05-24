import "../css/header";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default class Header extends React.Component {
  render() {
    return (


      <div className="topnav">
        <div className="float-left center">

          <div className="mini-box"></div>
          <div className="mini-box"></div>
        </div>

        
          <div class="search-container">
            <form action="/action_page.php">
              <input type="text" placeholder="Search.." name="search"></input>
              <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
            </form>
          </div>
        
      </div>
   
    );
  }     
}