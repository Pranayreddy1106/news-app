const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db');
const authRoutes = require('./routes/auth.routes');
const summaryRoutes = require('./routes/summaries.routes');

const { sampleNewsData } = require('./sampleData');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

const GNEWS_API_KEY = process.env.GNEWS_API_KEY;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GNEWS_API_KEY) {
    console.warn("WARNING: GNEWS_API_KEY is not defined. Using sample data for news.");
}
if (!GEMINI_API_KEY) {
    console.warn("WARNING: GEMINI_API_KEY is not defined. Using mock summaries.");
}

// Helper function to format articles from GNews to a consistent format
const formatArticles = (articles) => {
    return articles.map(article => ({
        title: article.title,
        description: article.description,
        content: article.content,
        url: article.url,
        urlToImage: article.image, // Map 'image' to 'urlToImage'
        publishedAt: article.publishedAt,
        source: {
            name: article.source.name,
            url: article.source.url
        },
        author: article.author || null
    }));
};

// Main endpoint for fetching news (handles categories and search)
app.get('/api/news', async (req, res) => {
    const { category, q } = req.query;
    let url;

    if (q) {
        // Handle search query
        console.log(`Searching for: ${q}`);
        url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(q)}&lang=en&country=in&apikey=${GNEWS_API_KEY}`;
    } else if (category && category !== 'trending') {
        // Handle category query
        console.log(`Fetching news for category: ${category}`);
        url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&apikey=${GNEWS_API_KEY}`;
    } else {
        // Handle trending (top headlines)
        console.log('Fetching trending news');
        url = `https://gnews.io/api/v4/top-headlines?lang=en&country=in&apikey=${GNEWS_API_KEY}`;
    }

    if (!GNEWS_API_KEY) {
        console.log('Serving sample news data');
        return res.json({ articles: sampleNewsData });
    }

    try {
        const response = await axios.get(url);
        const formatted = formatArticles(response.data.articles);
        res.json({ articles: formatted });
    } catch (error) {
        console.error('Error fetching from GNews:', error.message);
        res.json({ articles: sampleNewsData, note: 'Serving sample data due to API error' });
    }
});

app.post('/api/summarize', async (req, res) => {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt is required.' });
    
    if (!GEMINI_API_KEY) {
        console.log('Serving mock summary');
        return res.json({ summary: "This is a sample AI summary. To get real AI summaries, please provide a GEMINI_API_KEY in the .env file. \n\n• Key Point 1: This is a placeholder.\n• Key Point 2: Sample data is being used.\n• Key Point 3: The backend is running locally." });
    }

    try {
        const response = await axios.post(geminiUrl, {
            contents: [{ parts: [{ text: prompt }] }]
        });
        const summary = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!summary) return res.status(500).json({ error: "Could not extract summary from AI response." });
        res.json({ summary });
    } catch (error) {
        console.error('Error with Gemini API:', error.message);
        res.json({ summary: "Sample summary (API Error): The news story discusses important events." });
    }
});

app.use('/api/auth', authRoutes);
app.use('/api/summaries', summaryRoutes);

app.listen(PORT, () => {
    console.log(`Synapse News server is running on http://localhost:${PORT}`);
});
