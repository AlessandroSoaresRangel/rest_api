import Sequelize, { Model } from "sequelize";
export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Nome precisa ter de 3 a 255 caracteres.",
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Sobrenome precisa ter de 3 a 255 caracteres.",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            isEmail: {
              msg: "E-mail invalido",
            },
          },
        },
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: "",
          validate: {
            isInt: {
              msg: "Idade precisa ser um numero inteiro",
            },
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Peso precisa ser um numero",
            },
          },
        },
        altura: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Altura precisa ser um numero",
            },
          },
        },
      },
      { sequelize }
    );
    return this;
  }
  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: "aluno_id" });
  }
}
