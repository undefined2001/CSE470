const express = require('express');
const userRoutes = require('./routers/user.routes');
const app = express();
const cors = require('cors');
// Middleware to parse JSON requests
app.use(cors());
app.use(express.json());

// Use the user routes
app.use('/users', userRoutes);


app.use((req, res) => {
    res.status(404).json({ message: "Error 404 page not foud" });
})

module.exports = app;