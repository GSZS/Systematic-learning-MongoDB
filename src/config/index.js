const dotenv = require("dotenv");
const path = require("path");
dotenv.config({
  path: path.resolve(__dirname, "../../.env.development"),
});

// 与项目运行有关的配置
const pj_port = process.env.PORT;

// 与数据库有关的配置
const db_port = process.env.DB_PORT;
const db_host = process.env.DB_HOST;

// 与日志有关
const logConfig = {
  level: "silly",
};

module.exports = { pj_port, db_port, db_host, logConfig };
