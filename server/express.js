const express = require('express');
const path = require("path");

const app = express();
const port = 3310;
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});
app.listen(port, () => console.log(`Code online 👍`));

module.exports = app;