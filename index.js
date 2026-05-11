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
