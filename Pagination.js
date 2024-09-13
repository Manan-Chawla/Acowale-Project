// src/components/Pagination.js
import React from 'react';

const Pagination = ({ setPage }) => {
    const handlePageChange = (direction) => {
      setPage(prev => Math.max(1, prev + direction)); // Prevent going to page 0 or negative pages
    };
  
    return (
      <div>
        <button onClick={() => handlePageChange(-1)}>Previous</button>
        <button onClick={() => handlePageChange(1)}>Next</button>
      </div>
    );
  };
  

export default Pagination;
