import React from 'react';

interface Auction {
  id: number;
  productName: string;
  status: string; // Ongoing or Completed
  currentBid: number;
}

const BiddingManagement: React.FC = () => {
  const auctions: Auction[] = [
    { id: 1, productName: 'Artwork 1', status: 'Ongoing', currentBid: 150 },
    { id: 2, productName: 'Artwork 2', status: 'Completed', currentBid: 200 },
    // Add more mock auction data or fetch from the backend
  ];

  const handleViewBiddingDetails = (auctionId: number) => {
    // Implement logic to view bidding details
    console.log(`Viewing bidding details for auction with ID ${auctionId}`);
  };

  return (
    <div>
      <h2>Bidding Management</h2>
      <ul>
        {auctions.map((auction) => (
          <li key={auction.id}>
            <strong>{auction.productName}</strong> - Status: {auction.status} - Current Bid: ${auction.currentBid}
            <button onClick={() => handleViewBiddingDetails(auction.id)}>View Bidding Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BiddingManagement;
