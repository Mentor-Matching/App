// Import dependencies
const express = require('express');

const stoppable = require('stoppable');

const cors = require('cors');
const morgan = require('morgan');
const path = require('path')

const initializeExpress = () => {
  // Start Express server instance
  const app = express();
  // Start stoppable server for graceful shutdown
  const server = stoppable(require('http').Server(app));
  // import environment variables
  const environment = require('./environment/environment');

  /***** Set up middlewares *****/
  // Parse incoming data with JSON payloads
  app.use(express.json({
    limit: '1mb'
  }))

  app.use(express.urlencoded({
    extended: true
  }))

  if (environment.NODE_ENV === "production") {
    app.use(cors);
    app.use(morgan('combined'));
  } else {
    app.use(morgan('dev'));
  }

  /***** Serve static assets *****/
  app.use(express.static(path.resolve(__dirname, '../backend/public')))

  /***** Initialize URLs *****/
  const accountURL = environment.rootRoute + "account";

  /***** Import Routers *****/
  const accountRouter = require('./routes/account');

  /***** Set up endpoints *****/
  app.use(accountURL, accountRouter);

  /***** Graceful Shutdown *****/
  process.on('SIGINT', function onSigint() {
    console.info('\nUser Interrupted the process. Starting graceful shutdown', new Date().toISOString());
    shutdown();
  })

  process.on('SIGTERM', function onSigterm() {
    console.info('Termination signal detected. Starting graceful shutdown', new Date().toISOString());
    shutdown();
  })

  const shutdown = () => {
    console.info('starting stoppable');
    server.stop();
    console.info('exiting');
    process.exit();
  }

  // Start listening to port
  server.listen(environment.port, function() {
    let port = server.address().port;
    console.log('MM Node App is Live. Listening to port:', port)
  })
}

/***** Initialize app *****/
const initializeApp = () => {
  console.log('Initiating MM Node App');
  initializeExpress();
}

initializeApp();