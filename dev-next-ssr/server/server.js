const express = require("express");
const next = require("next");
const routes = require("../routes");
const app = next({ 
    dev: process.env.NODE_ENV !== "production",
    dir: './src',
});
const handler = routes.getRequestHandler(app);
// const address = require("address");

app.prepare().then(() => {

  const port = process.env.PORT || 3000;
  const server = express(); 

  server.use(handler);
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Env ${process.env.WILD_ENV} Ready on http://localhost:${port}`); 
    // const url = `http://${address.ip()}:${port}`;
    const url = `http://localhost:${port}`;
  });

});