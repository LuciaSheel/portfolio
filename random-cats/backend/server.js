require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.API_KEY;

// Endpoint to fetch a random cat image
app.get("/cat-data", async (req, res) => {
    try {
        let response = await axios.get("https://api.thecatapi.com/v1/images/search", {
            headers: { "x-api-key": API_KEY }
        });

        res.json(response.data); // Send cat image data to frontend
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch cat image" });
    }
});

// Start the server
app.listen(3001, () => console.log("Server running on port 3001"));
