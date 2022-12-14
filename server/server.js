const express = require("express");
const cors = require("cors");
const fileUpload=require('express-fileupload')
const app = express();
require('dotenv').config();
const cookieParser=require('cookie-parser')
// const SECRET=process.env.SECRET_KEY;

// middleware for post request
app.use(express.json(), express.urlencoded({ extended: true }));
// middleware for cookie parser
app.use(cookieParser());
// middleware for connecting server to client
app.use(
  cors({credentials:true,
    origin: "http://localhost:3000",
  })
);
// middleware for using file upload (initialize file upload  )
app.use(fileUpload())

require("./config/mongoose.config");
// import routes
require("./routes/user.routes")(app);
require("./routes/image.routes")(app);

app.listen(8000, () => console.log("Listening on Port 8000"));
