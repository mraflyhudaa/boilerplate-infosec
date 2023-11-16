const express = require("express");
const helmet = require("helmet");

const app = express();

app.use(helmet());

app.get("/_app/package.json", (req, res) => {
  res.sendFile(path.join(__dirname, "package.json"));
});
