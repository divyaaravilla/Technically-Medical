import { DataTypes } from "sequelize";

export default (sequelize, DataTypes) => {
  // Schema for users
  const User = sequelize.define(
    "usertable",
    {
      userid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userFullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userAge: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userPhone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userEmail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userMedHistory: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userAppointment: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      userDoctor: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
  return User;
};
