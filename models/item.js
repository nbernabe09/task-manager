const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  item: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
