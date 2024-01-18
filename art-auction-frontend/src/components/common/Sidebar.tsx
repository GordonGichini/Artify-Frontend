import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-48 flex flex-col items-center">
      <Link to="/dashboard" className="py-4 text-xl font-bold">
        Dashboard
      </Link>
      <Link to="/dashboard/profile" className="py-4">
        Profile
      </Link>
      <Link to="/dashboard/settings" className="py-4">
        Settings
      </Link>
      {/* Add more links as needed */}
    </div>
  );
};

export default Sidebar;
