const instance = require("../middleware/razorpay");
// import crypto from "crypto";
const book = require("../models/book.js");

const checkout = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.amount * 100),
      currency: "INR",
    };
    console.log(options);

    const order = await instance.orders.create([options, function (err, order) {
      console.log(err);
    }]);
   

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { checkout };
