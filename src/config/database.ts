import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const database = new Sequelize(
  process.env.SQLite_DATABASE ?? "",
  process.env.SQLite_USER ?? "",
  process.env.SQLite_PASSWORD ?? "",
  {
    storage: "./databases/database.sqlite",
    dialect: "sqlite",
    logging: false,
  }
);
