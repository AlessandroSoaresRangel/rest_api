import Aluno from "../models/Aluno";

class AlunoController {
  async index(req, res) {
    const aluno = await Aluno.findAll();
    res.json(aluno);
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.json(aluno);
    } catch (error) {
      res.status(400).json({ errors: error.errors.map((e) => e.message) });
    }
  }
  async show(req, res) {
    try {
      const { id } = req.params;

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(404).json({ errors: ["aluno não encontrado"] });
      }
      return res.json(aluno);
    } catch (error) {
      res.status(400).json({ errors: error.errors.map((e) => e.message) });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(404).json({ errors: ["aluno não encontrado"] });
      }
      await aluno.destroy();
      res.json({ apagado: true });
    } catch (error) {
      res.status(400).json({ errors: error.errors.map((e) => e.message) });
    }
  }
  async update(req, res) {
    const { id } = req.params;

    const aluno = await Aluno.findByPk(id);

    if (!aluno) {
      return res.status(404).json({ errors: ["aluno não encontrado"] });
    }
    const alunoAtualizado = await Aluno.update(req.body);
  }
}

export default new AlunoController();
