import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import moment from "moment";

class Saved extends Component {
  state = {
    items: []
  }

  componentDidMount() {
    console.log("loop");
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

  editItem = (id) => {
    API.editItem({
      _id: id,
      updatedAt: moment().format()
    });
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
        <div className="row">
          {
            this.state.items.map(card => {
              return (
                <div key={card._id} className="col">
                  <div className="card">
                    <div className="card-header">
                      {card.class}
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">
                        {card.item}
                      </h4>
                      <footer className="blockquote-footer">
                        Created on {moment(card.createdAt).format("MMM D, YYYY")}
                      </footer>
                      <div className="btn-group right">
                        <button
                          className="btn btn-info"
                          onClick={() => this.editItem(card._id)}
                        >
                          <span className="ion-edit"></span> Edit
                        </button>
                        <button
                          className="btn btn-danger right"
                          onClick={() => this.deleteItem(card._id)}
                        >
                          <span className="ion-trash-a"></span> Delete
                        </button>
                      </div>
                    </div>
                    <div className="card-footer text-muted">
                      Last updated {moment(card.updatedAt).startOf('second').fromNow()}
                    </div>
                  </div>
                </div>
              )
            }) || "no results"
          }
        </div>
      </div>
    );
  }
}

export default Saved;
