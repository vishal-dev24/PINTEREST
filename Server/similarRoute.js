const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

// GET /similar?query=nature
router.get("/similar", async (req, res) => {
    const q = req.query.query;
    if (!q) return res.status(400).json({ error: "query missing" });

    try {
        const r = await fetch(`https://duckduckgo.com/i.js?o=json&q=${q}`);
        const data = await r.json();
        return res.json(data.results);
    } catch (err) {
        return res.status(500).json({ error: "similar fetch failed" });
    }
});

module.exports = router;