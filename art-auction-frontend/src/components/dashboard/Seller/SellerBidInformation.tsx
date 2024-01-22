// SellerBidInformation.tsx
import React from 'react';

const SellerBidInformation: React.FC = () => {
  const [bidInformation, setBidInformation] = React.useState<Array<{ bidder: string; amount: number; timestamp: string }>>([]);

  // Fetch bid information from the backend
  React.useEffect(() => {
    // Replace with actual API call to fetch bid details
    setBidInformation([
      { bidder: 'User1', amount: 100, timestamp: '2022-01-01 12:00 PM' },
      { bidder: 'User2', amount: 120, timestamp: '2022-01-02 02:30 PM' },
      // Add more mock data or fetch from the backend
    ]);
  }, []);

  return (
    <div>
      <h3>Bid Information</h3>

      {/* Display bid information */}
      <ul>
        {bidInformation.map((bid, index) => (
          <li key={index}>
            Bidder: {bid.bidder}, Amount: {bid.amount}, Timestamp: {bid.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SellerBidInformation;
