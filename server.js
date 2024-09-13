const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000;
const apiKey = process.env.GNEWS_API_KEY;

app.use(cors());

app.get('/news', async (req, res) => {
  // Destructure query parameters with default values
  const { keyword = '', country = '', category = '', page = 1 , language='en'} = req.query;
  
  // Ensure language is set to 'en' for English
  const apiUrl = `https://gnews.io/api/v4/search?q=${keyword}&country=${country}&category=${category}&lang=en &page=${page}&token=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching news:', error.message); // Log the error
    res.status(500).json({ message: 'Error fetching news', error: error.message });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
