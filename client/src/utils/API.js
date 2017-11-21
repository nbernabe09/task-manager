import axios from "axios";

export default {
  getItems: function(userId) {
    return axios.get("/api/items/" + userId);
  },

  deleteItem: function(id) {
    return axios.delete("/api/items/" + id);
  },

  saveItem: function(itemData) {
    return axios.post("/api/items", itemData);
  }
};
