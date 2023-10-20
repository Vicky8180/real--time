const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,

    required: true,
  },
  email: {
    type: String,

    required: true,
  },
  password: {
    type: String,

    required: true,
  },
  photo: {
    type: String,

    required: true,
    default:
      "https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg",
  },
});

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
