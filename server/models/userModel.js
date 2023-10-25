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
      "https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small/happy-young-cute-illustration-face-profile-png.png",
  },
  friends:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users",
    default:null
  }]
});

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
