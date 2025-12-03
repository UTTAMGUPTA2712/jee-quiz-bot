const { Client } = require("whatsapp-web.js");
const client = new Client();

const questions = [
  { q: "What is capital of India?", a: "Delhi" },
  { q: "2 + 2 = ?", a: "4" },
];

client.on("qr", (qr) => console.log("Scan this QR in WhatsApp"));
client.on("ready", () => console.log("JEE Bot Ready!"));

client.on("message", async (msg) => {
  if (msg.body.toLowerCase() === "start") {
    await msg.reply(
      `Welcome to Daily JEE Quiz!\nQuestion 1: ${questions[0].q}`
    );
  } else if (msg.body.toLowerCase() === questions[0].a.toLowerCase()) {
    await msg.reply("Correct! You're a legend ");
  }
});

client.initialize();
