const express = require("express");

const {checkout,paymentVerification } = require('../controllers/book');
// const{getbook,getbookbyid}= require("../controllers/book/Get")




const BookRouter = express.Router();

BookRouter.post("/checkout",checkout);
BookRouter.post("/paymentVerification ",paymentVerification );
// BookRouter.get("/getbook", getbook);

module.exports = BookRouter ;