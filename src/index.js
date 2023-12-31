const express = require("express");
//const { PORT } = require("./config/server_config");
const app = express();

const { User } = require("./models/index");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const UserRepository = require("./repository/user_repository");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const apiRoutes = require("./routes/index");
const prepareAndStartService = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.listen(3001, async () => {
    console.log("server started at :3001");

    // const repo = new UserRepository();
    // const response = await repo.getById(1);
    // console.log(response);

    // const incomingPassword = "1233445";
    // const user = await User.findByPk(2);
    // const response = bcrypt.compareSync(incomingPassword, user.password);
    // console.log(response);
  });

  app.use("/api", apiRoutes);
};
prepareAndStartService();
