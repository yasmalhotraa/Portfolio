const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, message } = req.body;

    const contactEmail = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Use environment variable for email
        pass: process.env.EMAIL_PASS, // Use environment variable for password
      },
    });

    try {
      await contactEmail.sendMail({
        from: `${firstName} ${lastName}`,
        to: "your-email@example.com", // Replace with your email address
        subject: "Contact Form Submission",
        html: `<p>Name: ${firstName} ${lastName}</p>
               <p>Email: ${email}</p>
               <p>Phone: ${phone}</p>
               <p>Message: ${message}</p>`,
      });
      res
        .status(200)
        .json({ code: 200, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ code: 500, message: "Failed to send message" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
