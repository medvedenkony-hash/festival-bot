import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

const BOT_TOKEN = "8591260825:AAEXQTjD3NYmTYy9nuWkSvKWq6tVIZpyH7E";
const CHAT_ID = "8339993500";

app.post("/new-user", async (req, res) => {
  const { name, email } = req.body;

  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: `Новая регистрация:\n${name} (${email})`
    })
  });

  res.send("ok");
});

app.listen(3000);
