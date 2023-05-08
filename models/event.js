const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
   EventName:String,
   Date:Date,
   Venue:String,
   Category:String,
   fee:Number,
   OrganizationID:String,
   Banner :String,

  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);
