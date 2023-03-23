import express from "express";
import {
  newUser,
  getUsers,
  getUsersByAppointment,
  getUserById,
  updateUserById,
  deleteUserById,
} from "../controller/user.js";

const router = express.Router();

// api endpoints
// create new user

router.post("/api/create", newUser);
// get all users
router.get("/api/users", getUsers);
// get all users
router.get("/api/appointments", getUsersByAppointment);
// get user by its associated id
router.get("/api/user/:id", getUserById);
// update data for the user with the given id
router.put("/api/user/:id", updateUserById);
// delete user by its id
router.delete("/api/user/:id", deleteUserById);

export default router;
