import React from 'react';

import Sidebar from '../common/Sidebar';


const AdminDashboard: React.FC = () => {
  const userManagementData = {
    sellers: 10,
    bidders: 15,
  };

  const productManagementData = {
    artworks: 50,
  };

  const categoryManagementData = {
    categories: 5,
  };

  const biddingAnalyticsData = {
    openBids: 10,
    closedBids: 25,
  };
  return (

      <div className="flex">
        <Sidebar persona="admin" />
        <div className="flex-1 mx-auto p-8 max-w-screen-lg">
        <div className="flex space-x-4 ml-16">
          {/* User Management Card */}
          <div className="flex-1 max-w-[400px] p-4 bg-white shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-4">User Management</h2>
            <p>Sellers: {userManagementData.sellers}</p>
            <p>Bidders: {userManagementData.bidders}</p>
          </div>

          {/* Product Management Card */}
          <div className="flex-1 max-w-[400px] bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-4">Product Management</h2>
            <p>Artworks: {productManagementData.artworks}</p>
          </div>

          {/* Category Management Card */}
          <div className="flex-1 max-w-[400px] bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Category Management</h2>
            <p>Categories: {categoryManagementData.categories}</p>
          </div>

          {/* Bidding Analytics Card */}
          <div className="flex-1 max-w-[400px] bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Bidding Analytics</h2>
            <p>Open Bids: {biddingAnalyticsData.openBids}</p>
            <p>Closed Bids: {biddingAnalyticsData.closedBids}</p>
          </div>
        </div>


        </div>

      </div>

  );
};

export default AdminDashboard;

