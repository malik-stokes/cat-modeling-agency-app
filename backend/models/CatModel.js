const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/catModels.json');

function readCats() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

function writeCats(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

module.exports = {
  getAllCats: () => readCats(),

  addCat: (cat) => {
    const cats = readCats();
    const newId = cats.length ? cats[cats.length - 1].id + 1 : 1;

    const newCat = {
      id: newId,
      name: cat.name,
      breed: cat.breed,
      age: cat.age,
      description: cat.description,
      available: true,
      bookings: [],           // Add empty bookings array
      performanceScore: 0     // Default performance score
    };

    cats.push(newCat);
    writeCats(cats);
    return newCat;
  },

  // Add a booking for a cat by ID
  addBooking: (catId, booking) => {
    const cats = readCats();
    const cat = cats.find(c => c.id === catId);
    if (!cat) return null;

    cat.bookings.push(booking);
    // Optionally update availability if bookings affect it:
    // cat.available = false;

    writeCats(cats);
    return cat;
  },

  // Update performance score for a cat by ID
  updatePerformance: (catId, score) => {
    const cats = readCats();
    const cat = cats.find(c => c.id === catId);
    if (!cat) return null;

    cat.performanceScore = score;
    writeCats(cats);
    return cat;
  }
};