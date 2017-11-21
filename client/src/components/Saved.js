import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import moment from "moment";

class Saved extends Component {
  state = {
    items: []
  }

  componentDidMount() {
    this.loadItems();
  }

  componentDidUpdate() {
    this.loadItems();    
  }

  loadItems = () => {
    const userId = this.props.userId;
    if (userId) {
      API.getItems(userId).then(res =>
        this.setState({
          items: res.data
        })
      );
    } else {
      this.setState({
        items: []
      });
    }
  }

  deleteItem = (id) => {
    API.deleteItem(id)
       .then(res => this.loadItems())
       .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <span className="ion-archive"></span> {this.props.userInfo.givenName}'s Task List
        </div>
        {
          this.state.items.map(card => {
            return (
              <div key={card._id} className="card-body">
                <h4 className="card-title">
                  {card.item}
                </h4>
                <p className="card-text">
                  Created on {moment(card.createdAt).format("MMM D, YYYY")}
                </p>
                <button
                  className="btn btn-danger right"
                  onClick={() => this.deleteItem(card._id)}
                >
                  <span className="ion-trash-a"></span> Delete
                </button>
              </div>
            )
          }) || "no results"
        }
      </div>
    );
  }
}

export default Saved;
