// AdminDashboard.tsx
import React from 'react';

import Sidebar from '../common/Sidebar';


const AdminDashboard: React.FC = () => {
  return (

      <div className="flex">
        <Sidebar persona="admin" />
        <div className="flex-1 mx-auto p-8 max-w-screen-lg">
          {/* Admin content */}
        </div>

      </div>

  );
};

export default AdminDashboard;

