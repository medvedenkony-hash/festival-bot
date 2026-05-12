const fetch = require('node-fetch');
const express = require('express');
const cors = require('cors');

const app = express();

// ✅ важные настройки
app.use(cors());
app.use(express.json());

// ✅ проверка сервера
app.get('/', (req, res) => {
  res.send('Server is running ✅');
});

// ✅ обработка заявки
app.post('/new-user', async (req, res) => {
  try {

    console.log('===== НОВАЯ ЗАЯВКА =====');
    console.log(req.body);
       await fetch('https://script.google.com/macros/s/AKfycbx5ajjce9nz4__FeYD3sDmhK44GRFTIt-OCflMvQoQ5gdsDacjffqVgPhHJQIhkgpPv/exec', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(req.body)
});

    // просто ответ (чтобы фронт не зависал)
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('ОШИБКА:', error);
    res.status(500).json({ success: false });
  }
});

// ✅ запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server started on port ' + PORT);
});
const TELEGRAM_TOKEN = '8591260825:AAEXQTjD3NYmTYy9nuWkSvKWq6tVIZpyH7E';
const CHAT_ID = '8339993500';
async function sendTelegram(text) {
  await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text
    })
  });
}
app.post('/buy', async (req, res) => {
  const data = req.body;

  // запись в таблицу
  await fetch('https://script.google.com/macros/s/AKfycbx5ajjce9nz4__FeYD3sDmhK44GRFTIt-OCflMvQoQ5gdsDacjffqVgPhHJQIhkgpPv/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...data,
      status: 'оплачено'
    })
  });

  // телеграм
  await sendTelegram(
    `Новая оплата:
Имя: ${data.name}
Телефон: ${data.phone}
Место: ${data.row}-${data.seat}
Цена: ${data.price}`
  );

  res.json({ success: true });
});
app.post('/buy', async (req, res) => {
  const data = req.body;

  // запись в таблицу
  await fetch('https://script.google.com/macros/s/AKfycbx5ajjce9nz4__FeYD3sDmhK44GRFTIt-OCflMvQoQ5gdsDacjffqVgPhHJQIhkgpPv/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...data,
      status: 'оплачено'
    })
  });

 
