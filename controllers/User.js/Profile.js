const User = require("../../models/user");

const EditProfile = async (req, res) => {
  const {
    name,
    Address,
    Bank_Acc_No,
    IFSC,
    PAN_No,
    DOB,
    user_id,
  } = req.body;
  try {
    //   let attach = await cloudinary.v2.uploader.upload(
    //     req.files.attachment.tempFilePath,
    //     {
    //       folder: "Profile",
    //     }
    //   );
    const profile = await Profile.findByIdAndUpdate(user_id, {
      name,
      Address,
      Bank_Acc_No,
      IFSC,
      PAN_No,
      DOB,
    });

    // console.log(Profile);
    res.status(200).json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { EditProfile };
