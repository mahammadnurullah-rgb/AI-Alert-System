const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json({ limit: "10mb" }));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "md5857099@gmail.com",
    pass: process.env.EMAIL_PASS
  }
});

app.post("/", async (req, res) => {
  const { image, location } = req.body;

  const base64Data = image.replace(/^data:image\/png;base64,/, "");

  await transporter.sendMail({
    from: "md5857099@gmail.com",
    to: "mahammadnurullah@gmail.com",
    subject: "🚨 Alert",
    text: "Location: " + location,
    attachments: [{
      filename: "photo.png",
      content: base64Data,
      encoding: "base64"
    }]
  });

  res.send("ok");
});

app.listen(3000);
