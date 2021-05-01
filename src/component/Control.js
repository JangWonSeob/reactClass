import React, { Component } from "react"

class Control extends Component {
    render() {
      console.log("Control render");
      return (
        <ul>
          <li><a href="/create" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode("create");
          }.bind(this)}>create</a></li>
          <li><a href="/updata" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode("updata");
          }.bind(this)}>updata</a></li>
          <li><input onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode("delete");
          }.bind(this)} type="button" value="delete" ></input></li>
      </ul>
      );
    }
}

export default Control;