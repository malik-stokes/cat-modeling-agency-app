const express = require('express');
const app = express();
const catsRouter = require('./routes/cats');

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Cat Model Management System');
});

// Use /cats routes
app.use('/cats', catsRouter);

app.listen(3001, () => {
  console.log('Backend is running on http://localhost:3001');
});
