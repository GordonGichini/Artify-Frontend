import React from 'react';
import Sidebar from '../common/Sidebar';


const SellerDashboard: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar persona="seller" />
      <div className="flex-1 mx-auto p-8 max-w-screen-lg">
       {/* Seller content */}

      </div>

    </div>
   

  );
};

export default SellerDashboard;

