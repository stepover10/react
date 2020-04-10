import express from "express";
import path from "path";
const expressLayouts = require('express-ejs-layouts');


const app = express();

app.use( express.static(path.join(__dirname,'../')) )
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../templates'));

// ejs-layouts setting
app.set('layout', 'layout/layout');
app.set("layout extractScripts", true);
app.use(expressLayouts);


// todo Routers Start
{
    app.get("/", (req, res) => {
        res.render('index/index')
    });

}
// todo Routers End




app.listen(3000, () => {
    console.log('Running on http://localhost:3000/');
});
