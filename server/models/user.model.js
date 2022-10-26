const Mongoose = require("mongoose");
const userSchema = mongoose.Schema(
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
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, "Email is required"],
      validate: {
        validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email",
      },
    },
    gender: { type: String, enum: [female, male] },
    dateOfBirth: {
      type: Date,
      required: [true, "Birth date is required"],
      min: "1-1-2009",
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minLength: [5, "password must be at least 5 character"],
    },
    confirmPassword: {
      type: String,
      required: [true, "Confirm password is required"],
      minLength: [5, "Confirm password must be at least 5 character"],
    },
    profilePic: {
      type: String,
    },
    // refrencing to the image model
    image: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Image' }
      ]
  },
  { timestamps: true }
);
