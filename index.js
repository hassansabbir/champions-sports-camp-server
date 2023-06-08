const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.port || 5000;

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Champions Sports Camp is running!!");
});

app.listen(port, () => {
  console.log(`Champions Sports Camp is running on port: ${port}`);
});
