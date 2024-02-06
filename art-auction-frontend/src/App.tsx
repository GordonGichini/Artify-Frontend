import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Navbar from './components/common/Navbar';
import Homepage from './components/Homepage';
import AdminDashboard from './components/dashboard/AdminDashboard';
import UserManagement from './components/dashboard/Admin/UserManagement';
import BiddingManagement from './components/dashboard/Admin/BiddingManagement';
import CategoryManagement from './components/dashboard/Admin/CategoryManagement'; 
import ProductManagement from './components/dashboard/Admin/ProductManagement';
import SendUpdates from './components/dashboard/Admin/SendUpdates';
import BidderDashboard from './components/dashboard/BidderDashboard';
import BidOnProduct from './components/dashboard/Bidder/BidOnProduct';
import BuyPackage from './components/dashboard/Bidder/BuyPackage';
import ModifyBiddingPrice from './components/dashboard/Bidder/ModifyBiddingPrice';
import ProductDetails from './components/dashboard/Bidder/ProductDetails';
import SearchItems



from './components/dashboard/Bidder/SearchItems';
import SellerDashboard from './components/dashboard/SellerDashboard';
import './App.css';




const NotFound: React.FC = () => {
  return <div>404 Not Found</div>
}



const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/dashboard/admin" Component={AdminDashboard} />
        <Route path="/dashboard/admin/manage/users" Component={UserManagement} />  
        <Route path="/dashboard/admin/manage/artwork" Component={ProductManagement} />  
        <Route path="/dashboard/admin/manage/categories" Component={CategoryManagement} /> 
        <Route path="/dashboard/admin/view-bids" Component={BiddingManagement} /> 
        <Route path="/dashboard/admin/send-emails" Component={SendUpdates} />  
        <Route path="/dashboard/admin/notifications" Component={CategoryManagement} />  
        <Route path="/dashboard/bidder" Component={BidderDashboard} />
        <Route path="/dashboard/bidder/my-bids" Component={BidderDashboard} />
        <Route path="/dashboard/bidder/my-wins" Component={BidderDashboard} />
        <Route path="/dashboard/bidder/my-orders" Component={BidderDashboard} />
        <Route path="/dashboard/bidder/notifications" Component={BidderDashboard} />
        <Route path="/dashboard/seller" Component={SellerDashboard} />
        <Route path="/dashboard/seller/add-artwork" Component={SellerDashboard} />
        <Route path="/dashboard/seller/my-artwork" Component={SellerDashboard} />
        <Route path="/dashboard/seller/closed-bids" Component={SellerDashboard} />
        <Route path="/dashboard/seller/bids" Component={SellerDashboard} />
        <Route path="/dashboard/seller/my-wallet" Component={SellerDashboard} />
        <Route path="/dashboard/seller/notifications" Component={SellerDashboard} />
        <Route Component={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;
