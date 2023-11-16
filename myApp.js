const express = require("express");
const helmet = require("helmet");
const package = require("./package.json");

const app = express();

app.use(helmet());

app.get("/_api/package.json", (req, res) => {
  console.log(package);
  res.send(package);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
