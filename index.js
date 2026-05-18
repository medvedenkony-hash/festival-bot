const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// ✅ проверка
app.get('/', (req, res) => {
  res.send('Server is running ✅');
});

// ✅ TELEGRAM
const TELEGRAM_TOKEN = 'ВСТАВЬ_НОВЫЙ_ТОКЕН';
const CHAT_ID = '8339993500';

async function sendTelegram(text) {
  await fetch("https://script.google.com/macros/s/AKfycbyn7SDSbTKs3T8obA4XMt_UtuXpfuUb4vy-NzBaDV3mgnN2BpWbSwdLRy96HGBfX6Kq/exec", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text
    })
  });
}

// ✅ регистрация
app.post('/new-user', async (req, res) => {
  try {

    const data = req.body;

    const WEB_APP_URL =
      'https://script.google.com/macros/s/AKfycbyn7SDSbTKs3T8obA4XMt_UtuXpfuUb4vy-NzBaDV3mgnN2BpWbSwdLRy96HGBfX6Kq/exec';

    await fetch(WEB_APP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    res.json({
      success: true
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      error: String(error)
    });
  }
});
