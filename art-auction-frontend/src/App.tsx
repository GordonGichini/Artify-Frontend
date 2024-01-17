import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/login';
import Register from './components/auth/register';
import logo from './logo.svg';
import './App.css';

const Home: React.FC = () => {
  return <div> Home Page</div>
}

const NotFound: React.FC = () => {
  return <div>404 Not Found</div>
}



const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route Component={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;
