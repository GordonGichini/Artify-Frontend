import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import Header from './components/common/Header';
import ArtCarousel from './components/common/ArtCarousel';
import AdminDashboard from './components/dashboard/AdminDashboard';
import BidderDashboard from './components/dashboard/BidderDashboard';
import SellerDashboard from './components/dashboard/SellerDashboard';
import './App.css';
import SearchCard from './components/common/SearchCard';

const Home: React.FC = () => {
  return (
    <div>
   <div> Home Page</div>
  </div>
  );
}

const NotFound: React.FC = () => {
  return <div>404 Not Found</div>
}



const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/dashboard/admin" Component={AdminDashboard} /> 
        <Route path="/dashboard/bidder" Component={BidderDashboard} />
        <Route path="/dashboard/seller" Component={SellerDashboard} />
        <Route Component={NotFound} />
      </Routes>
      <Header />
      <SearchCard />
      <ArtCarousel />
      <ArtCarousel />
      <ArtCarousel />
    </Router>
  );
}

export default App;
