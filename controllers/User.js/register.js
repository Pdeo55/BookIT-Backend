const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require('../../middleware/config');
const roles = require("../../utils/roles")




const addUser = async (req, res) => {
  const { name, phoneNo, email, password,Organization} = req.body;
  if (!(email && password && name && phoneNo)) {
    res.status(400).json("All input is required");
  }
  try {

    const olduser=await User.findOne({email});
    if(olduser){
      return res.status(409).json("User Already Exist. Please Login")
    }

    encryptedpass =await bcrypt.hash(password,10);
    const adduser = await User.create({
      name,
      phoneNo,
      Organization,
      email:email.toLowerCase(),
      password:encryptedpass,
      role:req.body.role || roles.User,
    });

    const token = jwt.sign(
      { user_id: adduser._id, email },
      config.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    adduser.token = token;
    res.status(200).json(adduser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



module.exports = {addUser};
