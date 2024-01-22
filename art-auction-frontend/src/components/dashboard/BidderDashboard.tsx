import React from 'react';
import Sidebar from '../common/Sidebar';

const BidderDashboard: React.FC = () => {
  return (
    <div>
        <Sidebar persona="bidder" />
      <h2>Bidder Dashboard</h2>
      {/* Add bidder dashboard content */}
    </div>
  );
};

export default BidderDashboard;
