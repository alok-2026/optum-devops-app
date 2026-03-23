const express = require('express');
const app = express();

const PORT = 3000;

// Health check route
app.get('/', (req, res) => {
    res.send('App is running successfully 🚀');
});

// Sample API route
app.get('/api/data', (req, res) => {
    res.json({
        message: "Hello from Optum DevOps Project",
        status: "Success"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});