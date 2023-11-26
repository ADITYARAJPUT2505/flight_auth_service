const UserService = require("../services/user_services");

const userService = new UserService();
const create = async (req, res) => {
  try {
    const response = await userService.create({
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(201).json({
      success: true,
      message: "successfully created a user",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong in create controller layer",
      daa: {},
      success: false,
      err: error,
    });
  }
};

// const destroy = async (req, res) => {
//   try {
//     const response = await userService.destroy({
//       email: req.body.email,
//       password: req.body.password,
//     });
//     return res.status(201).json({
//       success: true,
//       message: "successfully deleted a user",
//       data: response,
//       err: {},
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "something went wrong in create controller layer",
//       data: {},
//       success: false,
//       err: error,
//     });
//   }
// };

module.exports = {
  create,
  //destroy,
};
