# Cat Modeling Agency App

A full‑stack web application built to showcase a fictional cat modeling agency. The project features a Next.js + Tailwind CSS frontend and an Express.js backend for managing cat profiles, bookings, and performance scores. The backend currently uses JSON file storage and is designed to support future expansion.

---

## Features

- Browse 12 unique cat profiles
- Responsive multi-page UI built with Next.js
- Reusable React components styled with Tailwind CSS
- Backend API for:
  - Fetching cat data
  - Adding new cat profiles
  - Creating bookings
  - Updating performance scores
- JSON-based data storage for development
- Clear project structure that supports future enhancements

---

## Technologies Used

### Frontend
- Next.js / React
- JavaScript
- Tailwind CSS

### Backend
- Node.js
- Express.js

### Data Layer
- JSON file storage

---

## Project Structure

```text
cat-modeling-agency-app/
├── frontend/                  
│   ├── app/                  
│   ├── components/            
│   ├── public/               
│   └── tailwind.config.js
│
├── backend/                  
│   ├── index.js              
│   ├── routes/
│   │   └── cats.js
│   ├── models/
│   │   └── CatModel.js
│   └── data/
│       └── catModels.json
│
└── .gitignore

```

---

## Running the Project

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend runs at:

```text
http://localhost:3000
```

### Backend

```bash
cd backend
npm install
node index.js
```

The backend runs at:

```text
http://localhost:3001
```

---

## API Endpoints

### Get All Cats

```http
GET /cats
```

Returns all cat profiles.

---

### Add a New Cat

```http
POST /cats
```

Example request body:

```json
{
  "name": "Luna",
  "age": 3,
  "breed": "Siberian",
  "description": "Calm and photogenic."
}
```

---

### Add a Booking

```http
POST /cats/:id/bookings
```

Adds a booking for a specific cat.

---

### Update Performance Score

```http
PATCH /cats/:id/performance
```

Updates a cat's performance score.

---

## Testing the API

### Get All Cats

```bash
curl http://localhost:3001/cats
```

### Add a Cat

```bash
curl -X POST http://localhost:3001/cats \
-H "Content-Type: application/json" \
-d "{\"name\":\"TestCat\",\"age\":2,\"breed\":\"TestBreed\",\"description\":\"Added via CMD\"}"
```

### Add a Booking

```bash
curl -X POST http://localhost:3001/cats/4/bookings \
-H "Content-Type: application/json" \
-d "{\"client\":\"Malik\",\"date\":\"2026-07-01\",\"location\":\"Atlanta\"}"
```

### Update Performance Score

```bash
curl -X PATCH http://localhost:3001/cats/4/performance \
-H "Content-Type: application/json" \
-d "{\"score\":95}"
```

---

## Future Enhancements

- Connect the frontend directly to the backend API
- Replace JSON storage with a relational database
- Build an admin dashboard
- Add calendar-based booking management
- Add search, filtering, and analytics
