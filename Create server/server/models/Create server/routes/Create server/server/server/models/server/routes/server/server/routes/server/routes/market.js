const express = require('express');
const router = express.Router();

// Get current prices
router.get('/prices', async (req, res) => {
  try {
    // Mock data for now - replace with real API later
    const prices = [
      { symbol: 'BTC', name: 'Bitcoin', price: 45000, change24h: 2.5 },
      { symbol: 'ETH', name: 'Ethereum', price: 3200, change24h: -1.2 },
      { symbol: 'BNB', name: 'Binance Coin', price: 420, change24h: 0.8 }
    ];
    
    res.json(prices);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
