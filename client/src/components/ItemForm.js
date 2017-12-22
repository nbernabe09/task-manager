import React from "react";

const SearchForm = props => 
  <form>
    <div className="form-group">
      <input 
        ref="itemRef"
        value={props.item}
        onChange={props.handleItemChange}
        type="text"
        className="form-control"
        id="item"
        placeholder="New task..."
      />
      <select
        className="form-control"
        onChange={props.handleClassChange}
      >
        <option>Task</option>
        <option>Note</option>
      </select>
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
