// AdminDashboard.tsx
import React from 'react';

import Sidebar from '../common/Sidebar';
import UserManagement from './Admin/UserManagement';
import ProductManagement from './Admin/ProductManagement';
import CategoryManagement from './Admin/CategoryManagement';
import SendUpdates from './Admin/SendUpdates';
import BiddingManagement from './Admin/BiddingManagement';

const AdminDashboard: React.FC = () => {
  return (

      <div className="flex">
        <Sidebar persona="admin" />
        <div className="flex-1">
        <UserManagement />
        <ProductManagement />
        <CategoryManagement />
        <SendUpdates />
        <BiddingManagement />
        </div>
      </div>

  );
};

export default AdminDashboard;

