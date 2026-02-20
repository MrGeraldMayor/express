const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// 1. Basic GET Route
app.get('/', (req, res) => {
  res.send('Welcome to the Express API!');
});

// 2. Status Route (Health Check)
app.get('/status', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// 3. POST Route (Example: Creating a User)
app.post('/users', (req, res) => {
  const { username, email } = req.body;

  if (!username || !email) {
    return res.status(400).json({ error: 'Username and Email are required' });
  }

  // In a real app, you'd save to a database here
  const newUser = {
    id: Math.floor(Math.random() * 1000),
    username,
    email,
    created_at: new Date()
  };

  res.status(201).json(newUser);
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
