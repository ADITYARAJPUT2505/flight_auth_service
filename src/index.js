const express = require("express");
// const { PORT } = require("./config/server_config");
const app = express();

const prepareAndStartService = () => {
  app.listen(3001, () => {
    console.log("server started at :3001");
  });
};

prepareAndStartService();
