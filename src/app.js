const express = require("express");
const { pj_port } = require("./config");
const connect = require("./db");
const Logger = require("./loaders/logger");

async function startServer() {
  const app = express();
  app
    .listen(pj_port, () => {
      console.info(`
      ################################################
      🎉  Server listening on port: ${pj_port} 🎉
      ################################################
    `);
      connect();
    })
    .on("error", (err) => {
      Logger.error(err);
      process.exit(1);
    });
}

startServer();
