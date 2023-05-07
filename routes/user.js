const express = require("express");
const {addUser} = require('../controllers/User/register');

const{login}= require("../controllers/User/login");
const{EditProfile}= require("../controllers/User/profile")

const UserRouter = express.Router();

UserRouter.post("/login", login);
UserRouter.post("/register", addUser);
UserRouter.put("/editProfile", EditProfile);



module.exports = UserRouter;
