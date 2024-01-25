import React, { useState } from 'react';
import Sidebar from '../../common/Sidebar';

const BiddingManagement: React.FC = () => {
  const [bids, setBids] = useState<any[]>([
    { id: 1, artwork: 'Artwork 1', bidder: 'Bidder A', amount: '$1000', status: 'Open' },
    { id: 2, artwork: 'Artwork 2', bidder: 'Bidder B', amount: '$1500', status: 'Closed' },
    // Add more mock bid data or fetch from the backend
  ]);

  const handleViewBidDetails = (bidId: number) => {
    // Implement logic to view bid details
    const bid = bids.find(bid => bid.id === bidId);
    console.log(`Viewing details of bid with ID ${bidId}`);
    console.log(bid);
  };

  const handleEditBid = (bidId: number) => {
    // Implement logic to edit bid
    console.log(`Editing bid with ID ${bidId}`);
    const newAmount = prompt('Enter new bid amount');
    if (newAmount) {
      setBids(prevBids =>
        prevBids.map(bid =>
          bid.id === bidId ? { ...bid, amount: newAmount } : bid
          )
        );
    }
  };

  const handleCloseBid = (bidId: number) => {
    // Implement logic to close bid
    console.log(`Closing bid with ID ${bidId}`);
    // Update bid status to Closed in the state
    setBids(prevBids =>
      prevBids.map(bid =>
        bid.id === bidId ? { ...bid, status: 'Closed' } : bid
        )
      );
  };

  return (
    <div className="flex">      
      <Sidebar persona="admin" />
      <div className="ml-64 p-8 w-full">
        <h2 className="text-2xl font-semibold mb-4">Bidding Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bids.map((bid) => (
            <div key={bid.id} className="bg-white shadow-md rounded-md p-4">
              <h3 className="text-lg font-semibold">{bid.artwork}</h3>
              <p><strong>Bidder:</strong> {bid.bidder}</p>
              <p><strong>Amount:</strong> {bid.amount}</p>
              <p><strong>Status:</strong> {bid.status}</p>
              <div className="mt-4">
                <button className="mr-2 bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600" onClick={() => handleViewBidDetails(bid.id)}>
                  View Details
                </button>
                <button className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600" onClick={() => handleEditBid(bid.id)}>
                  Edit
                </button>
                {bid.status === 'Open' && (
                  <button className="bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600" onClick={() => handleCloseBid(bid.id)}>
                    Close Bid
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BiddingManagement;

