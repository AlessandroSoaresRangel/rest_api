import User from "../models/User";

class UserController {
  async create(req, res) {
    try {
      const user = await User.create(req.body);
      res.json({
        user,
      });
    } catch (error) {
      res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }

    console.log("teste");
  }
}

export default new UserController();
