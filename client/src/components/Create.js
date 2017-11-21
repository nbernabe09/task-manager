import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import ItemForm from "./ItemForm";

class Search extends Component {
  state = {
    item: ""
  }

  handleInputChange = (event) => {
    this.setState({
      item: event.target.value
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.saveItem({
      item: this.state.item,
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
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
