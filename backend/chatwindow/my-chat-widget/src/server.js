// Load environment variables from .env file
require("dotenv").config({
  path: "/home/jbilong/Projects/code-to-give/backend/chatwindow/my-chat-widget/src/secret.env",
});

// Import necessary packages
const express = require("express");
const http = require("http");
const twilio = require("twilio");
const socketio = require("socket.io");

// Initialize Express app and server
const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set up Twilio client and phone number
const accountSid = process.env.TWILIO_ACCOUNT_SID; // Twilio account SID
const authToken = process.env.TWILIO_AUTH_TOKEN; // Twilio auth token
const twilioClient = twilio(accountSid, authToken); // Twilio client
const twilioNumber = process.env.TWILIO_PHONE_NUMBER; // Twilio phone number
const moderatorPhoneNumber = process.env.MODERATOR_PHONE_NUMBER; // Moderator phone number

// Set up route to handle incoming chat messages
app.post("/chat", express.json(), (req, res) => {
  const { name, email, phone, message, object } = req.body;
  const textMessage = `New chat message from ${name} (${email}, ${phone}): ${message}`;

  // Send text message to moderator's phone number using Twilio
  twilioClient.messages
    .create({
      body: textMessage,
      from: twilioNumber,
      to: moderatorPhoneNumber,
    })
    .then((message) =>
      console.log(
        `Sent message ${message.sid} to ${moderatorPhoneNumber}: ${textMessage}`
      )
    )
    .catch((error) =>
      console.error(
        `Failed to send message to ${moderatorPhoneNumber}: ${error}`
      )
    );

  // Emit incoming chat message to moderator's browser in real-time
  io.emit("chat", { name, email, phone, message, object });

  res.sendStatus(200);
});

// Set up route to handle incoming SMS messages
app.post("/sms", twilio.webhook(), (req, res) => {
  const { From, Body } = req.body;

  // Emit incoming SMS message to chat widget in real-time
  io.emit("sms", { from: From, message: Body });

  res.sendStatus(200);
});

// Start server and listen for incoming connections
server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
