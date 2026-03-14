const express = require('express');
const router = express.Router();

// Place buy order
router.post('/buy', async (req, res) => {
  try {
    const { symbol, amount, price } = req.body;
    
    // This would normally process the trade
    res.json({ 
      message: 'Buy order placed successfully',
      order: { symbol, amount, price, type: 'buy', status: 'pending' }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Place sell order
router.post('/sell', async (req, res) => {
  try {
    const { symbol, amount, price } = req.body;
    
    // This would normally process the trade
    res.json({ 
      message: 'Sell order placed successfully',
      order: { symbol, amount, price, type: 'sell', status: 'pending' }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
