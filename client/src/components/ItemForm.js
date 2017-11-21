import React from "react";

const SearchForm = props => 
  <form>
    <div className="form-group">
      <label htmlFor="term">Task:</label>
      <input 
        value={props.item}
        onChange={props.handleInputChange}
        type="text"
        className="form-control"
        id="item"
        placeholder="New task..."
      />
    </div>
    <button
      type="submit"
      onClick={props.handleFormSubmit}
      className="btn btn-primary"
    >
      Add Task
    </button>
  </form>;

export default SearchForm;
