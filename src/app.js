import express from "express";
import { pj_port } from "./config/index.js";
import { connect } from "./db/index.js";
import logger from "./loaders/logger.js";
import { runCRUD } from "./services/example.js";

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
      logger.error(err);
      process.exit(1);
    });
  runCRUD();
}

startServer();
