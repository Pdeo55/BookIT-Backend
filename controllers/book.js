const rzp = require("../middleware/razorpay");
const crypto = require("crypto");
const book = require("../models/book.js");

const checkout = async (req, res) => {
  const amount =req?.body?.amount;
  try {

    const rzpOrder = await rzp?.orders?.create({
      amount: amount * 100, 
      currency: 'INR',
      receipt: "receipt#1", 
      payment_capture: true,
      notes: {
       orderType: "Pre"
      } 
     })
     console.log(rzpOrder )
    res.status(200).json({
      success: true,
      rzpOrder
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Database comes here

    await book.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    res.redirect(
      `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({
      success: false,
    });
  }
};

module.exports = { checkout,paymentVerification };
