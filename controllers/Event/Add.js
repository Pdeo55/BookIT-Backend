const Event = require("../../models/event");
const {fileUpload,deleteObject} = require("../../utils/fileUpload");
const callBack = require("../../utils/callBack");
const fs = require("fs");
const S3 = require("../../middleware/aws-config");

const addEvent = async (req, res) => {
  const { EventName, Date, Venue, Category, fee, OrganizationID } = req.body;
  const Banner =req?.files?.Banner;
  // console.log(Banner)
  const fileContent = fs.readFileSync(Banner?.tempFilePath);
console.log(S3)
  const key = Banner?.name;
  const bucket=`${process.env.AWS_BUCKET}/Event`;
  const mimetype = Banner?.mimetype;

  const uploadParams = {
    bucket: bucket,
    file: fileContent,
    key: key,
    mimetype: mimetype,
  };
  try {

    const data = await fileUpload(
      uploadParams,
      (url) => {
        if (url) {
          Event.create({ Banner: url }, callBack(err, response));
        }
      },
      (err) => {
        res.status(200).send({ status: "failed", message: err?.message });
      }
    );
    console.log(data);
    const addevent = await Event.create({
      EventName,
      Date,
      Venue,
      Category,
      fee,
      OrganizationID,
      Banner:data.Location,
    });
    res.status(200).json(addevent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addEvent };

