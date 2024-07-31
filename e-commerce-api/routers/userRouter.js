// Login the user
import { findUserByEmail } from "../model/userModel.js";
import { comparePassword } from "../utility/bcryptHelper.js";
import express from "express";

const userRouter = express.Router();

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  res.send(200, email + password);
});

export default userRouter;
