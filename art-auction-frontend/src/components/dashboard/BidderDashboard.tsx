import React from 'react';
import Sidebar from '../common/Sidebar';


const BidderDashboard: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar persona="bidder" />
      <div className="flex-1 mx-auto p-8 max-w-screen-lg">
       {/* Bidder content */}

      </div>

    </div>
   

  );
};

export default BidderDashboard;
