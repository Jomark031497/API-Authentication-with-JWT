const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

//connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to db!");
  }
);

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//route middlewaress
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(8080, () => console.log("Server Up and running"));
