const express = require("express");

const {checkout} = require('../controllers/book');
// const{getbook,getbookbyid}= require("../controllers/book/Get")




const BookRouter = express.Router();

BookRouter.post("/checkout",checkout);
// BookRouter.post("/getbookbyid",getbookbyid);
// BookRouter.get("/getbook", getbook);

module.exports = BookRouter ;