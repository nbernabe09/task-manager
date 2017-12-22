import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import ItemForm from "./ItemForm";

class Search extends Component {
  state = {
    item: "",
    class: "Task"
  }

  handleItemChange = (event) => {
    this.setState({
      item: event.target.value
    });
  }

  handleClassChange = (event) => {
    this.setState({
      class: event.target.value
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.refs.itemRef);
    
    API.saveItem({
      item: this.state.item,
      class: this.state.class,
      userId: this.props.userId
    }).then(res => {
      this.setState({
        item: ""
      });
    });
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header">
            <span className="ion-compose"></span> New Task
          </div>
          <div className="card-body">
            <ItemForm
              handleItemChange={this.handleItemChange}
              handleClassChange={this.handleClassChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
