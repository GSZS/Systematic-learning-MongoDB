// CRUD的示例

import { exec } from "../db/index.js";

export function runCRUD() {
  exec("users", "insert", {
    name: "hello",
  });
}
