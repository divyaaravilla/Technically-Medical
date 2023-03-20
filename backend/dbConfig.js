export const dbConfig = {
  HOST: "127.0.0.1",
  USER: "newuser",
  PASSWORD: "password1#",
  DB: "userdb",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
