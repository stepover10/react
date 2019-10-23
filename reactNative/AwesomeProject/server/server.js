const path = require('path');
const express = require("express");
const app = express();

app.use( express.static(path.join(__dirname,'../dist')) );
app.get('*', (req, res) => {
  res.sendFile('public/index.html', { root: '.' });
});

app.listen(8082, () => {
  console.log("START SERVER : 8082")
})
