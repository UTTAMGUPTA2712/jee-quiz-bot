const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-accelerated-2d-canvas",
      "--no-first-run",
      "--no-zygote",
      "--single-process",
      "--disable-gpu",
    ],
  },
});

client.on("qr", (qr) => {
  console.log("SCAN THIS QR NOW:");
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("BOT IS 100% READY! Message your own number from another phone!");
});

client.on("message", async (msg) => {
  console.log("Received:", msg.body);
  if (msg.body.toLowerCase().includes("hi") || msg.body === "start") {
    await msg.reply("Yo bhai! Bot live hai\n2 + 2 = ?");
  } else if (msg.body === "4") {
    await msg.reply("Topper banega tu!");
  } else {
    await msg.reply("Bhai 4 likh na!");
  }
});

client.initialize();
