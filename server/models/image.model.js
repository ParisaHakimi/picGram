const Mongoose = require("mongoose");
const ImageSchema = mongoose.Schema({
  postedImage: {
    type: String,
  },
  postedImageDescription: {
    type: String,
  },
  postedImageComments: {
    type: String,
  },
});
