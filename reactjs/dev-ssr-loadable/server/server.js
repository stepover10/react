import express from "express";
import path from "path";

import React from 'react'
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import { getLoadableState } from 'loadable-components/server';
import Layout from "../src/layout/Layout";

const app = express();

app.use(express.static("../dist"));

// todo app SSR setting START :: ==============
app.get("*", async (req, res) => {

  const context = {};
  const html = (
      <StaticRouter location={req.url} context={context}>
        <Layout />
      </StaticRouter>
  );

  if (context.url) {
      res.redirect(context.url);
      return;
  }

  const loadableState = await getLoadableState(html);
  const reactLayoutComponent = ReactDOMServer.renderToString(html);

  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(`
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Get real playlists to share with Spotify</title>
        </head>
        <body>
            <div id="root">${reactLayoutComponent}</div>
            ${loadableState.getScriptTag()}
        </body>
    </html>
  `);

});
// todo app SSR setting END :: ================


app.listen(8080, () => { console.log('Running on http://localhost:8080/'); });

