
import React from "react";
import ReactDOM from 'react-dom/client';
import restartAnimation from "./restartAnimation";
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
      hideRight: false,
      width: null
    };
  }


  componentDidMount() {
    init();
  }

  screenShift() {
    //console.log(this.state.black)
    if (this.state.black) { 
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
    // to refresh the tree
    //const placeholder = document.getElementById("treeContent");
    //placeholder.render(<TreeContent width={"1400"} height={"700"}/>);
    //placeholder.
    restartAnimation();

  }

  toSplitScreen(){
    this.setState({black: !this.state.black})
    this.setState({hideRight: !this.state.hideRight})
    let leftClass = document.getElementById("leftClass");
    leftClass.style.width = '75%'
    restartAnimation();
    //const root = ReactDOM.createRoot(document.getElementById("root"));
    //root.render(<Main />);
  }

  
  render () {  
    let btn_class = this.state.black ? "blackButton" : "whiteButton";  
    let right_div_class = this.state.hideRight ? "dont-show" : "initial-right-width";  
    let resizer = this.state.hideRight ? "dont-show" : "resizer"; 
    
    return (   
      <div>
        <Header />


        <div className="container" id="body">  
          
          <div className="left-width" id="leftClass">  
            <SizeMe>{({ size }) => 
              <div style={{width:"100%"}}>
                <button className={btn_class} id="shiftButton" onClick={this.screenShift.bind(this)}>
                  <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                </button>
                <div id="treeContent">
                  <TreeContent width={size.width} height={"700"}/>
                </div>
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