import dotenv from "dotenv";
import path from "path";
import { __dirname } from "../utils/index.js";

dotenv.config({
  path: path.resolve(__dirname, "../../.env.development"),
});

// 与项目运行有关的配置
const pj_port = process.env.PORT;

// 与数据库有关的配置
const db_port = process.env.DB_PORT;
const db_host = process.env.DB_HOST;
const db_name = process.env.DB_NAME;

// 与日志有关
const logConfig = {
  level: "silly",
};

export { pj_port, db_port, db_host, db_name, logConfig };
