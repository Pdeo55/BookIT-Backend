
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  // razorpay_order_id: {
  //   type: String,
  //   required: true,
  // },
  razorpay_payment_id: {
    type: String,
    required: true,
  },
  // razorpay_signature: {
  //   type: String,
  //   required: true,
  // },
  userDetails:Object,
  eventDetails: Object,
});

module.exports = mongoose.model("book", bookSchema);