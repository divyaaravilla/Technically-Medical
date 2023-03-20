import express from "express";
import cors from "cors";
import router from "./src/routes/routes.js";
import dbConnection from "./src/model/db.js";
import { errorHandler } from "./src/middleware/error.js";

const app = express();

// suppress cors error
app.use(cors());

// To parse incoming JSON requests and put the parsed data in req.body
app.use(express.json());

// Routing for our backend
app.use(router);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 8080;
const serverStart = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  } catch (error) {
    console.log("Something went wrong" + error);
  }
};

serverStart();
