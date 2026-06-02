const express = require('express');
const router = express.Router();
const CatModel = require('../models/CatModel');

// GET all cats
router.get('/', (req, res) => {
  const cats = CatModel.getAllCats();
  res.json(cats);
});

// Add a new cat
router.post('/', (req, res) => {
  const { name, age, breed, description } = req.body;
  if (!name || !age || !breed || !description) {
    return res.status(400).json({ error: 'Name, age, breed and description are required' });
  }

  const newCat = CatModel.addCat({ name, age, breed, description });
  res.status(201).json(newCat);
});

// Add a booking to a cat
router.post('/:id/bookings', (req, res) => {
  const catId = parseInt(req.params.id);
  const { client, date, location } = req.body;

  if (!client || !date || !location) {
    return res.status(400).json({ error: 'client, date, and location are required' });
  }

  const updatedCat = CatModel.addBooking(catId, { client, date, location });
  if (!updatedCat) {
    return res.status(404).json({ error: 'Cat not found' });
  }

  res.json(updatedCat);
});

// Update performance score of a cat
router.patch('/:id/performance', (req, res) => {
  const catId = parseInt(req.params.id);
  const { score } = req.body;

  if (typeof score !== 'number') {
    return res.status(400).json({ error: 'Score must be a number' });
  }

  const updatedCat = CatModel.updatePerformance(catId, score);
  if (!updatedCat) {
    return res.status(404).json({ error: 'Cat not found' });
  }

  res.json(updatedCat);
});

module.exports = router;