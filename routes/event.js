const express = require("express");
const {addEvent} = require('../controllers/Event/Add.js');
// const{login}= require("../controllers/Event.js/login")
const EventRouter = express.Router();

EventRouter.post("/addEvent",addEvent);
// EventRouter.post("/register", addEvent);



module.exports = EventRouter;
