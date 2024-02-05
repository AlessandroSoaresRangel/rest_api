require("dotenv").config();
module.exports = {
  dialect: "mariadb",
  host: process.env.DATA_BASE_HOST,
  port: process.env.DATA_BASE_PORT,
  username: process.env.DATA_BASE_USERNAME,
  password: process.env.DATA_BASE_PASSWORD,
  database: process.env.DATA_BASE,
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
  dialectOptions: {
    timezone: "America/Sao_Paulo",
  },
  timezone: "America/Sao_Paulo",
};
