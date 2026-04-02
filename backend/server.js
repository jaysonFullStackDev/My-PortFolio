import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/test", (req, res) => {
  console.log("Received body:", req.body);
  res.json({ received: req.body });
});

app.post("/contact", async (req, res) => {
  const { name, email, msg } = req.body;

  if (!name || !email || !msg) {
    return res.status(400).json({ message: "All fields required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Message from ${name}`,
      text: msg,
    });

    res.status(200).json({ message: "Email sent!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
