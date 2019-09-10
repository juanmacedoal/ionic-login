const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');

app.use(
  bodyParser.json({
    type: 'text/plain',
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use((req, res, next) => {
  // Website you wish to allow to connect
  // res.setHeader('Access-Control-Allow-Origin', '*');

  // // Request methods you wish to allow
  // res.setHeader(
  //   'Access-Control-Allow-Methods',
  //   'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  // );

  // // Request headers you wish to allow
  // res.setHeader(
  //   'Access-Control-Allow-Headers',
  //   'X-Requested-With,content-type'
  // );

  // // Set to true if you need the website to include cookies in the requests sent
  // // to the API (e.g. in case you use sessions)
  // res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use(express.static(path.join(__dirname, 'www')));

/* ************** Server ************** */

let server = http.createServer(app);
server.listen(3000, () => {
  let port = server.address().port;
  console.log('------------------------------------------------');
  console.log(`Application Address: localhost:${port}`);
});

/* ************** Server ************** */
