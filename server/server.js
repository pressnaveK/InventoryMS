const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = 5000;
const app = express();

const cors = require("cors");
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const userRoute = require("./routes/Users");

mongoose
  .connect("mongodb://localhost:27017/Inventory", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected Successfully");
    app.use("/users",userRoute);
    
    

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
