import React from 'react';
import SellerArtworkForm from './SellerArtworkForm';
import SellerBidInformation from './SellerBidInformation';
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
    <div>
      <h2>Seller Dashboard</h2>
      <div className="flex">
        <Sidebar />
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

