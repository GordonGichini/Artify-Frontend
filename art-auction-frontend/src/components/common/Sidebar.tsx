// Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  persona: 'admin' | 'seller' | 'bidder';
}

const Sidebar: React.FC<SidebarProps> = ({ persona }) => {
  return (
    <div className="bg-gray-800 text-white h-screen w-48 flex flex-col items-center">
      {/* Common Sidebar Items */}
      <Link to={`/${persona}/dashboard`} className="py-4 text-xl font-bold">
        Dashboard
      </Link>
      <Link to={`/${persona}/profile`} className="py-4">
        Profile
      </Link>
      <Link to={`/${persona}/settings`} className="py-4">
        Settings
      </Link>

      {/* Persona-Specific Sidebar Items */}
      {persona === 'admin' && (
        <Link to={`/${persona}/manage-users`} className="py-4">
          Manage Users
        </Link>
      )}
      {persona === 'seller' && (
        <Link to={`/${persona}/upload-artwork`} className="py-4">
          Upload Artwork
        </Link>
      )}
      {persona === 'bidder' && (
        <Link to={`/${persona}/bid-history`} className="py-4">
          Bid History
        </Link>
      )}
    </div>
  );
};

export default Sidebar;

