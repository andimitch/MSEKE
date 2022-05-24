
import React from "react";
import Header from "./header";
import TreeContent from "./content";
import Description from "./descriptions";
import init from "./split.js";

import "../css/main";
import { SizeMe } from 'react-sizeme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'

 
export default class Main extends React.Component { 
  constructor() {
    super();
    this.state = {
      black: true,
      hideRight: false
    };
  }


  componentDidMount() {
    init();
  }

  screenShift() {
    console.log(this.state.black)
    if (this.state.black) { 
        console.log("here")
        this.toFullScreen();
    }
    else { 
        this.toSplitScreen();
    }
  }

  toFullScreen(){
    this.setState({black: !this.state.black})
    this.setState({hideRight: !this.state.hideRight})
    let leftClass = document.getElementById("leftClass");
    leftClass.style.width = '100%'
  }

  toSplitScreen(){
    this.setState({black: !this.state.black})
    this.setState({hideRight: !this.state.hideRight})
    let leftClass = document.getElementById("leftClass");
    leftClass.style.width = '75%'
  }

  render () {  
    let btn_class = this.state.black ? "blackButton" : "whiteButton";  
    let right_div_class = this.state.hideRight ? "dont-show" : "initial-right-width";  
    let resizer = this.state.hideRight ? "dont-show" : "resizer"; 
    
    return (   
      <div>
        <Header />

        <div className="container">  
          
          <div className="left-width" id="leftClass">  
            <SizeMe>{({ size }) => 
              <div style={{width:"100%"}}>
                <button className={btn_class} onClick={this.screenShift.bind(this)}>
                  <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                </button>
                <TreeContent width={size.width} height={"700"}/>
              </div>}
            </SizeMe>
          </div>
                   
          <div className={resizer} id="dragMe"></div>
          
          <div className={right_div_class} id="leftClass">
            <div style={{width:"100%"}}><Description /></div>
          </div>

        </div>
      </div>
    );
  }
}