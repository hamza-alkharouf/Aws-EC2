
const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('./mywebapp')
})
app.get("/mywebapp", (req, res) => {
  res.send("<h1>It's working </h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
