const rzp = require("../middleware/razorpay");
// import crypto from "crypto";
const book = require("../models/book.js");

const checkout = async (req, res) => {
  const amount =req?.body?.amount;
  try {
    const options = {
      amount: Number(req?.body?.amount * 100),
      currency: "INR",
    };
    console.log(options);

    const rzpOrder = await rzp?.orders?.create({
      amount: amount * 100, // rzp format with paise
      currency: 'INR',
      receipt: "receipt#1", //Receipt no that corresponds to this Order,
      payment_capture: true,
      notes: {
       orderType: "Pre"
      } //Key-value pair used to store additional information
     })
     console.log(rzpOrder )
    res.status(200).json({
      success: true,
      // order,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { checkout };
