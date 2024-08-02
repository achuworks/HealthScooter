const express = require('express');
const router = express.Router();
const { getChatResponse } = require('../openai');

router.post('/', async (req, res) => {
    const { message } = req.body;
    try {
        const response = await getChatResponse(message);
        res.json({ response });
    } catch (error) {
        res.status(500).json({ error: 'Failed to get response' });
    }
});

module.exports = router;
