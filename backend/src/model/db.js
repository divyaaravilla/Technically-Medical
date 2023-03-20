import { dbConfig } from "../../dbConfig.js";
import Sequelize from "sequelize";
import User from "./userSchema.js";

const { DataTypes } = Sequelize;

console.log(dbConfig);
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Error connecting to DB!" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = User(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("Re-sync done!");
});

export default db;
