const Razorpay = require("razorpay");

 const rzp = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_APT_SECRET,
  });

  module.exports={rzp}
