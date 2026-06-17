import path from "path";
import logger from "simple-node-logger";

const log = logger.createSimpleLogger({
  logFilePath: path.join(
    process.cwd(),
    "logs",
    "app.log"
  ),
  timestampFormat: "YYYY-MM-DD HH:mm:ss",
});

export default log;