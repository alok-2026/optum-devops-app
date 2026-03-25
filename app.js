const express = require('express');
const app = express();

// Environment variables
const PORT = process.env.PORT || 8080;
const MESSAGE = process.env.MESSAGE || "App is running successfully 🚀";

// Routes
app.get('/', (req, res) => {
    res.send(MESSAGE);
});

app.get('/api/data', (req, res) => {
    res.json({
        message: MESSAGE,
        status: "Success"
    });
});

app.get('/health', (req, res) => {
    res.status(200).send("OK");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});