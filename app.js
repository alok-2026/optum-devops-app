const express = require('express123');
const app = express();

// Environment variables
const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || "App is running successfully 🚀";

// Root route
app.get('/', (req, res) => {
    res.send(MESSAGE);
});

// Sample API route
app.get('/api/data', (req, res) => {
    res.json({
        message: MESSAGE,
        status: "Success"
    });
});

// Health check route (important for real-world)
app.get('/health', (req, res) => {
    res.status(200).send("OK");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});