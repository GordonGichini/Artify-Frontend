// src/components/common/SearchCard.tsx
import React from 'react';

const SearchCard: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">Find Artworks</h2>
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search by keyword"
          className="border p-2 flex-1 rounded-md"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <label htmlFor="category" className="text-gray-600">Artwork Category:</label>
        {/* Replace with your actual category options */}
        <select id="category" className="border p-2 rounded-md">
          <option value="abstract">Abstract</option>
          <option value="landscape">Landscape</option>
          <option value="portrait">Portrait</option>
          {/* Add more categories as needed */}
        </select>
      </div>
    </div>
  );
};

export default SearchCard;
