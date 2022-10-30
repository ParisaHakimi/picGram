const mongoose = require("mongoose");
const ImageSchema = mongoose.Schema(
  {
    postedImage: {
      type: String,
    },
    postedImageDescription: {
      type: String,
    },
    postedImageComments: {
      type: String,
    },
    isLiked:{
      type:Boolean,
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("Image", ImageSchema);
