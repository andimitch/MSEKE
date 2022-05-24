import React from "react";
import "../css/boxes";
import "../css/main"

class GreyBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="grey-box">
        <h1>{this.props.title}</h1>
        <hr></hr>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    );
  }
}

class MiniGreyBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mini-grey-box">
        <p>{this.props.item}</p>       
      </div>
    );
  }

}

export {GreyBox, MiniGreyBox};
