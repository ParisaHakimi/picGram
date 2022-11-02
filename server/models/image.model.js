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
// I'm not making image model on this page.just sending it to the user.model
// module.exports={ImageSchema}
module.exports = mongoose.model("Image", ImageSchema);
