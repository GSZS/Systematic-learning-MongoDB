import chalk from "chalk";
import { MongoClient } from "mongodb";
import { db_port, db_host, db_name } from "../config/index.js";
import logger from "../loaders/logger.js";

const db_config = {
  uri: `mongodb://${db_host}:${db_port}`,
  db_name,
};

// 创建mongodb客户端实例
const client = new MongoClient(db_config.uri);

// start connect
async function connect() {
  try {
    await client.connect();
    // 验证连接
    await client.db("admin").command({ ping: 1 });
    logger.info(
      chalk.green(`数据库连接成功：
         host: ${db_host},
         端口: ${db_port}
      `)
    );
  } catch (err) {
    console.error(chalk.red(`错误：${err}`));
    await client.close();
  } finally {
    await client.close();
  }
}

/**
 * 统一执行 command命令
 * @param {*} collectionName
 * @param {*} command
 * @param {*} value
 * @returns
 */
const exec = function (collectionName, command, value = {}) {
  logger.info(
    chalk.magenta("数据库命令执行命令", command, JSON.stringify(value))
  );

  const result = client
    .db(db_config.db_name)
    .collection(collectionName)
    [command](value);

  result.then((res) => {
    logger.info(chalk.green("数据库命令执行结果", JSON.stringify(res)));
  });
};

export { exec, connect };
