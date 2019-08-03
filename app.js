const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const userRoutes = require("./routes/user");

//apps
const app = express();

//database
mongoose
  .connect("mongodb://localhost:27017/ecommerce", {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("Database connected"));

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

//routes middleware
app.use("/api", userRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
