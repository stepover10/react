const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname,'../dist')));
app.get('/', function(req, res){
    res.sendFile('templates/index.html', { root: '.' });
});

app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});