import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const aluno = await Aluno.create({
      nome: "Alessandro",
      sobrenome: "Rangel",
      email: "trolei@trolei.com",
      idade: 21321,
      peso: 500,
      altura: 2.7,
    });
    res.json({
      aluno,
    });
    console.log("teste");
  }
}

export default new HomeController();
