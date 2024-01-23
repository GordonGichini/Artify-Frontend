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
import SellerDashboard from './components/dashboard/SellerDashboard';
import './App.css';




const NotFound: React.FC = () => {
  return <div>404 Not Found</div>
}



const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/dashboard/admin" Component={AdminDashboard} />  
        <Route path="/dashboard/bidder" Component={BidderDashboard} />
        <Route path="/dashboard/seller" Component={SellerDashboard} />
        <Route Component={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;
