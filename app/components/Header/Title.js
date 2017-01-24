import React from "react";

export default class Title extends React.Component {
  render() {
    return (
    	<div className="container">
	        <div className="jumbotron">
	          <h1>{this.props.name}</h1>
	        </div>
      </div>
    );
  }
}

