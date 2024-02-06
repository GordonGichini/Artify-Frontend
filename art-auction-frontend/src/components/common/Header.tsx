import React from 'react';
import Navbar from './Navbar';

const Header: React.FC = () => {
  return (

    <header className="relative bg-gray-200">
    <Navbar />
    <div className="relative h-96 md:h-128 lg:h-144 xl:h-160">
      <img
        src="/Rectangle.png"
        alt="Header Artwork"
        className="object-fill w-full h-full rounded-lg"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-white">Art is beautiful, Art is life,<br/> Buy Arts</h1>
        <p className="text-base md:text-lg lg:text-xl xl:text-3xl text-gray-400">Browse our collection to find the masterpiece <br/> that you desire and bid or Join us today to start selling.</p>
        <div className="mt-8">
          <button className="bg-yellow-500 text-white py-3 px-6 rounded-md mr-4 hover:bg-yellow-600">Explore Artworks</button>
          <button className="bg-white text-yellow-500 py-3 px-6 rounded-md hover:bg-gray-200">Start Selling</button>
        </div>
      </div>
    </div>
  </header>
  );
 
};

export default Header;
