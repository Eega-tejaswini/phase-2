const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const API_KEY = "YOUR_STOCK_API_KEY"; // Replace with your stock API key
const BASE_URL = "https://www.alphavantage.co/query"; // Example API (Alpha Vantage)

app.get("/api/stock/:symbol", async (req, res) => {
    const { symbol } = req.params;
    try {
        const response = await axios.get(`${BASE_URL}`, {
            params: {
                function: "GLOBAL_QUOTE",
                symbol: symbol,
                apikey: API_KEY
            }
        });

        const stockData = response.data["Global Quote"];
        if (!stockData) {
            return res.status(404).json({ message: "Stock data not found" });
        }

        res.json({
            symbol: stockData["01. symbol"],
            price: stockData["05. price"],
            change: stockData["10. change percent"]
        });

    } catch (error) {
        res.status(500).json({ error: "Error fetching stock data" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
