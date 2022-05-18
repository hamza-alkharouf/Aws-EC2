const express = require("express");
const app = express();

app.get("/mywebapp", (req, res) => {
  res.send("<h1>It's working 🤗</h1>");
});

app.get("/", (req, res) => {
  res.send("<h1>Go to .../mywebapp</h1>");
});

const port = 80;
app.listen(port, () => console.log(`Listening on port ${port}`));
