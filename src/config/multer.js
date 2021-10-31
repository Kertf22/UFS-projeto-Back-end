const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
require("dotenv/config")

console.log( process.env.AWS_SECRET_KEY,
    process.env.AWS_ACCESS_KEY,
   process.env.AWS_REGION)

AWS.config.update({
    secretAccessKey: process.env.AWS_SECRET_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    region:process.env.AWS_REGION
})
const s3 = new AWS.S3()

const upload = multer({
    storage: multerS3({
      s3,
      bucket: process.env.AWS_BUCKET,
      contentType: multerS3.AUTO_CONTENT_TYPE,
      acl:"public-read",
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null,file.fieldname + Date.now().toString())
      }
    })
  })

module.exports = upload
