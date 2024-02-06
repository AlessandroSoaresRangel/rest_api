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
  async index(req, res) {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      res.json(user);
    } catch (error) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;

      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({
          errors: ["Usuario não encontrado"],
        });
      }
      const newUser = await user.update(req.body);
      return res.json(newUser);
    } catch (error) {
      res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }
  async delete(req, res) {
    try {
      const id = req.params.id;

      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({
          errors: ["Usuario não encontrado"],
        });
      }
      await user.destroy();
      return res.status(200).json({
        response: ["Usuario deletado"],
      });
    } catch (error) {
      res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }
}

export default new UserController();
