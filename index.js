import express from "express";
import fetch from "node-fetch";

const app = express();

app.use(cors());
app.use(express.json());

const BOT_TOKEN = "8591260825:AAEXQTjD3NYmTYy9nuWkSvKWq6tVIZpyH7E";
const CHAT_ID = "8339993500";

app.post('/new-user', async (req, res) => {
  try {
    console.log('Новая заявка:', req.body);

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Ошибка:', err);
    res.status(500).json({ success: false });
  }
});

  res.send("ok");
});

app.listen(3000);
