import nodemailer from "nodemailer";

export const sendOTP = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // you can use SendGrid, Outlook, etc.
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP Code - JanVaani",
    text: `Your OTP is: ${otp}. It will expire in 5 minutes.`,
  };

  await transporter.sendMail(mailOptions);
};
