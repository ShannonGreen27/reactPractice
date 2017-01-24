import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor(){
    super();
    this.state = {name: 'Shannon'};
  }

  render() {
      const name = 'Jeremy';

    return (
      <div>
        <Header name={this.state.name}/>
        <Header name={name}/>        
        <Footer/>
      </div>
    );
  }
}
