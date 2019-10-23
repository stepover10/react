const routes = module.exports = require('next-routes')();

// routes.add("MINA_INDEX", "/main", "Index");
routes
  .add({name: 'A', pattern: '/', page: 'index'})
  // .add({name: 'B', pattern: '/main', page: 'mainindex'})


