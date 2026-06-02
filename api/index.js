// index.js
const express = require('express');
const app = express();
app.use(express.json());

let bookings = [];

app.post('/book', (req, res) => {
  const { catId, date } = req.body;
  const conflict = bookings.find(b => b.catId === catId && b.date === date);

  if (conflict) return res.status(400).json({ message: 'Double booking not allowed!' });

  bookings.push({ catId, date });
  res.json({ message: 'Booking successful!' });
});

app.listen(3002, () => console.log('API running on http://localhost:3002'));
