import React from 'react';

function Navbar () {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-yellow-500 shadow-md px-4 py-2">
      <div className="container mx-auto">
        {/* Your navigation links go here */}
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Artify Auction</div>
          {/* Add your navigation links (e.g., Home, About, Contact) */}
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Gallery</a>
            <a href="#" className="hover:underline">Auctions</a>
            <a href="#" className="hover:underline">Sign Up</a>
            <a href="#" className="hover:underline">Login</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
