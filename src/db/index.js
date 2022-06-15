const chalk = require("chalk");
const { MongoClient } = require("mongodb");
const { db_port, db_host } = require("../config");
const logger = require("../loaders/logger");

// 连接uri
const uri = `mongodb://${db_host}:${db_port}`;

// 创建mongodb客户端实例
const client = new MongoClient(uri);

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

module.exports = connect;
