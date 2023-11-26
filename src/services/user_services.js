const UserRepository = require("../repository/user_repository");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log("something went wrong in create service layer");
      throw error;
    }
  }

  async destroy(userId) {
    try {
      await this.userRepository.destroy({
        where: {
          id: userId,
        },
      });
      return true;
    } catch (error) {
      console.log("something went wrong in create service layer");
      throw error;
    }
  }
}

module.exports = UserService;
