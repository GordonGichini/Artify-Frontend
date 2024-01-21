import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-200 p-8 text-center">
      <div className="container mx-auto">
        {/* Artwork and header content */}
        <img
          src="https://images.pexels.com/photos/110818/pexels-photo-110818.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Header Artwork"
          className="rounded-lg mb-4"
        />
       

       
        <h1 className="text-4xl font-bold mb-2">Art is beautiful, Art is life,<br/> Buy Arts</h1>
        <p className="text-lg text-gray-600">Browse our collection to find the masterpiece <br/> that you desire and bid or Join us today to start selling.</p>
      </div>
    </header>
  );
 
};

export default Header;
