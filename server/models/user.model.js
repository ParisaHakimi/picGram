const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// const { ImageSchema } = require("./image.model");
const UserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      minLength: [3, "First name must be at least 3 character"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      minLength: [3, "Last name must be at least 3 character"],
    },
    email: {
      type: String,
      // trim: true,
      // lowercase: true,
      // unique: true,
      required: [true, "Email is required"],
      // validate: {
      //   validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
      //   message: "Please enter a valid email",
      // },
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minLength: [5, "password must be at least 5 character"],
    },
    profilePic: {
      type: String,
    },
    // refrencing to the image model
    // images: [ImageSchema],
    // image: [{ type: mongoose.Schema.Types.ObjectId, ref: "Image" }],
  },
  { timestamps: true }
);
// virtual is a property that is not stored in MongoDB, it creates a virtual field
UserSchema.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));
// Mongoose middleware
UserSchema.pre("validate", function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Password must match confirm password");
  }
  next();
});

UserSchema.pre("save", async function (next) {
  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    console.log("hashed password: ", hashedPassword);
    this.password = hashedPassword;
    next();
  } catch {
    console.log("Erros in save", error);
  }
});

module.exports = mongoose.model("User", UserSchema);
