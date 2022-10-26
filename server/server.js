const express = require("express");
const cors = require("cors");
const app = express();
// middleware
// middleware for post request
app.use(express.json(), express.urlencoded({ extended: true }));
// middleware for connect server to client
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
require("./config/mongoose.config");
require("./routes/user.routes")(app);
require("./routes/image.routes")(app);

app.listen(8000, () => console.log("Listening on Port 8000"));
