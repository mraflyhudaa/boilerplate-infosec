const express = require("express");
const helmet = require("helmet");
const helmetVersion = require("helmet/package.json").version;

const app = express();

app.use(helmet());

app.get("/_api/package.json", (req, res) => {
  res.send(helmetVersion);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
