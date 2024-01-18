import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto">
        {/* Your navigation links go here */}
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Artify Auction</div>
          {/* Add your navigation links (e.g., Home, About, Contact) */}
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Gallery</a>
            <a href="#" className="hover:underline">Auctions</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
