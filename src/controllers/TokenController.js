import Jwt from "jsonwebtoken";
import User from "../models/User";

class TokenController {
  async store(req, res) {
    const { email = "", password = "" } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        errors: ["Credenciais invalidas"],
      });
    }
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ errors: ["Usuario não encontrado"] });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ["Senha invalida"],
      });
    }

    const token = Jwt.sign({ id: user.id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    res.status(200).json({ token });
  }
}

export default new TokenController();
