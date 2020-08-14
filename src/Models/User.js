const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String
  },
  age: {
    type: Number
  },
  hobbies: {
    type: String
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;