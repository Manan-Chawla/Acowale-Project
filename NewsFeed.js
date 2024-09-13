import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';
import Pagination from './Pagination';
import SearchBar from './SearchBar';

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true); // Set loading to true at the start of fetching
      try {
        const response = await axios.get('http://localhost:5000/news', {
          params: {
            keyword: query, // Using query state for the search term
            country: '', // Add logic for selected country if needed
            category: '', // Add logic for selected category if needed
            language: 'en', // Ensuring news is in English
            page: page // Using page state
          }
        });
        setArticles(response.data.articles);
        setLoading(false); // Set loading to false after fetching is done
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false); // Set loading to false if there’s an error
      }
    };

    fetchNews();
  }, [page, query]); // Re-run when page or query changes

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {loading ? <p>Loading...</p> : (
        <div>
          {articles.length > 0 ? (
            articles.map(article => (
              <NewsCard key={article.url} article={article} />
            ))
          ) : (
            <p>No articles found</p>
          )}
          <Pagination setPage={setPage} />
        </div>
      )}
    </div>
  );
};

export default NewsFeed;
