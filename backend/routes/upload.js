const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");

// UPLOAD IMAGE
router.post("/", async (req, res) => {
    try {
        const fileStr = req.body.data;
        const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: "ml_default", // You might need to create this in Cloudinary dashboard settings -> Upload
        });
        res.status(200).json(uploadedResponse.secure_url);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;
