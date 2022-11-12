import { Sequelize } from "sequelize";

const db = new Sequelize("fullstack-mern", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
