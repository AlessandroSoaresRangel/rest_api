import User from "../models/User";

class UserController {
  async create(req, res) {
    try {
      const user = await User.create(req.body);
      const { id, nome, email } = user;
      res.json({ id, nome, email });
    } catch (error) {
      res.status(400).json({
        errors: error.message,
      });
    }
  }
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ["id", "nome", "email"] });

      res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, nome, email } = user;
      res.json({ id, nome, email });
    } catch (error) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(404).json({
          errors: ["Usuario não encontrado"],
        });
      }
      const newUser = await user.update(req.body);
      const { id, nome, email } = newUser;
      return res.json({ id, nome, email });
    } catch (error) {
      res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }
  async delete(req, res) {
    try {
      const id = req.userId;

      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({
          errors: ["Usuario não encontrado"],
        });
      }
      await user.destroy();
      return res.status(204).json(null);
    } catch (error) {
      res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }
}

export default new UserController();
