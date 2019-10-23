const path = require('path');
const express = require("express");
const next = require("next");
const routes = require("../routes");
const app = next({
    dev: process.env.NODE_ENV !== "production",
    dir: './src',
});
const handler = routes.getRequestHandler(app, ({req, res, route, query}) => {
  app.render(req, res, route.page, query)
})
// const address = require("address");

app.prepare().then(() => {

  const port = process.env.PORT || 3000;
  const server = express();

  server.use(express.static(path.join(__dirname,'../.next')));
  server.use(express.static(path.join(__dirname,'../images')));
  server.use(express.static(path.join(__dirname,'../fonts')));
  //server.use(handler);

  server.get('*', (req, res) => {
		return handler(req, res)
	})

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`ENV : ${process.env.WILD_ENV} Ready on http://localhost:${port}`);
  });

});
