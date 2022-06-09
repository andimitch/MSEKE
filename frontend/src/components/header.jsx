import "../css/header";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '@iconify/react';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      search: false
    };
  }

  searchShift() {
    this.setState({search: !this.state.search})
    console.log("shifingt")
  }

 
  
  render() {

    let search_class_name = this.state.search ? "search-nav" : "dont-show"; 
    let topnav_class_name = this.state.search ? "dont-show" : "topnav";

    return (
      <div>
        
        <div className={search_class_name}>
          <div className="float-right center">
            <Icon icon="bi:x-lg" color="white" width="1.5em" onClick={this.searchShift.bind(this)}/>
            <input placeholder="Text" type="text" />
            <Icon icon="ion:search-outline" color="white" width="1.5em" onClick={this.searchShift.bind(this)}/>
          </div>
 
        </div>
        

        <div className={topnav_class_name}>
          <div className="float-left center">
            <div className="mini-box"></div>
            <div className="logo-words">Knowledge<br></br><span className="pink">Engine</span></div>
          </div>
          <div className="search-icon">
          <Icon icon="ion:search-outline" color="white" width="1.5em" onClick={this.searchShift.bind(this)}/>
       
          </div>
        </div>

      </div>   
    );
  }     
}