const express = require("express");
const app = express();

app.use(express.json());

app.post("/", (req, res) => {
  console.log("Alert received:", req.body);
  res.send("ok");
});

app.listen(3000);
