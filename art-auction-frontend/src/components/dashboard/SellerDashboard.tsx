import React from 'react';
import SellerArtworkForm from './Seller/SellerArtworkForm';
import SellerBidInformation from './Seller/SellerBidInformation';
import Sidebar from '../common/Sidebar';

const SellerDashboard: React.FC = () => {
  const [activeComponent, setActiveComponent] = React.useState('artworkForm');

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'artworkForm':
        return <SellerArtworkForm />;
      case 'bidInformation':
        return <SellerBidInformation />;
      default:
        return null;
    }
  };
  
 
  return (
    <div className="mx-auto p-8 max-w-screen-lg">
      <h2>Seller Dashboard</h2>
      <div className="flex">
        <Sidebar persona="seller" />
        <div>
          <button onClick={() => setActiveComponent('artworkForm')}>Create/Edit Artwork</button>
          <button onClick={() => setActiveComponent('bidInformation')}>Bid Information</button>
          {/* Add other buttons as needed */}
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {renderActiveComponent()}
        </div>
      </div>
      
      {/* Add seller dashboard content */}
      
    </div>
  );
};

export default SellerDashboard;

