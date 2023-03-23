import { Sequelize, Op } from "sequelize";
import * as db from "../model/db.js";

const User = db.default.user;

// save new user data and return the save data as json
export const newUser = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    const result = await newUser.save();
    return res.status(201).json({
      user: result,
      message: "User created successfully",
    });
  } catch (error) {
    next(error);
  }
};

// find all users and return it as json
export const getUsers = async (req, res, next) => {
  try {
    const userDetails = await User.findAll({});
    return res.status(200).json(userDetails ? userDetails : []);
  } catch (error) {
    next(error);
  }
};

// find users that have appointments
export const getUsersByAppointment = async (req, res, next) => {
  try {
    const userDetails = await User.findAll({
      attributes: ["userid", "userAppointment", "userDoctor"],
      where: {
        userAppointment: {
          [Op.not]: null,
        },
      },
    });
    return res.status(200).json(userDetails ? userDetails : []);
  } catch (error) {
    next(error);
  }
};

// find user by its associated id return it as json
export const getUserById = async (req, res, next) => {
  try {
    const { userid } = req.params;
    const returnedData = await User.findById(userid);
    if (!returnedData) {
      return res.status(404).json({ message: "Error! User not found" });
    }
    return res.status(200).json(returnedData);
  } catch (error) {
    next(error);
  }
};

// update user by its id if the user is present and send the updated data as
// json
export const updateUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const returnedData = await User.update(
      {
        username: req.body.username,
        password: req.body.password,
        userFullName: req.body.userFullName,
        userAddress: req.body.userAddress,
        userAge: req.body.userAge,
        userPhone: req.body.userPhone,
        userEmail: req.body.userEmail,
        userMedHistory: req.body.userMedHistory,
        userAppointment: req.body.userAppointment,
      },
      { where: { userid: id } }
    );
    if (!returnedData) {
      return res
        .status(404)
        .json({ message: "Error while updating user. Data not found" });
    }

    return res
      .status(200)
      .json({ userinfo: returnedData, message: "User updated successfully" });
  } catch (error) {
    next(error);
  }
};

export const getLoggedInUserDetail = async (req, res, next) => {
  try {
    const { id } = req;
    const userDetail = await User.findByPk(id);
    return res.status(200).json(userDetail);
  } catch (e) {
    next(e);
  }
};

// delete user by its id if there is one, and return the deleted user info
export const deleteUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const returnedData = await User.destroy({
      where: {
        userid: id,
      },
    });
    if (!returnedData) {
      return res
        .status(404)
        .json({ message: "Error while deleting user. Data not found" });
    }
    return res
      .status(200)
      .json({ userinfo: returnedData, message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};
