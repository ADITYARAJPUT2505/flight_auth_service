validateUserAuth = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "sommething went wrong ",
      err: "email or password missing",
    });
  }
  next();
};

module.exports = {
  valid: validateUserAuth,
};
