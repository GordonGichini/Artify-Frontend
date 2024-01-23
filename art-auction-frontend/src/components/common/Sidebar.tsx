import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SidebarProps {
  persona: 'admin' | 'seller' | 'bidder';
}

const Sidebar: React.FC<SidebarProps> = ({ persona }) => {
  const [isCollapsed, setCollapsed] = useState(false);

    const getSidebarLinks = () => {
      switch (persona) {
        case 'admin':
          return (
            <>
              <li>
                <Link to="/dashboard/admin/manage/users">Users</Link>
              </li>
              <li>
                <Link to="/dashboard/admin/manage/artwork">Artwork</Link>
              </li>
              <li>
                <Link to="/dashboard/admin/manage/categories">Categories</Link>
              </li>
              <li>
                <Link to="/dashboard/admin/view-bids">View Bids</Link>
              </li>
              <li>
                <Link to="/dashboard/admin/send-emails">Send Emails</Link>
              </li>
              <li>
                <Link to="/dashboard/admin/notifications">Notifications</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </>
          );
  
        case 'seller':
          return (
            <>
              <li>
                <Link to="/dashboard/seller/add-artwork">Add Artwork</Link>
              </li>
              <li>
                <Link to="/dashboard/seller/my-artwork">My Artwork</Link>
              </li>
              <li>
                <Link to="/dashboard/seller/closed-bids">Closed Bids</Link>
              </li>
              <li>
                <Link to="/dashboard/seller/bids">Bids</Link>
              </li>
              <li>
                <Link to="/dashboard/seller/my-wallet">My Wallet</Link>
              </li>
              <li>
                <Link to="/dashboard/seller/notifications">Notifications</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </>
          );
  
        case 'bidder':
          return (
            <>
              <li>
                <Link to="/dashboard/bidder/my-bids">My Bids</Link>
              </li>
              <li>
                <Link to="/dashboard/bidder/my-wins">My Wins</Link>
              </li>
              <li>
                <Link to="/dashboard/bidder/my-orders">My Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/bidder/notifications">Notifications</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </>
          );
  
        default:
          return null;
      }
    };
  
    return (
      <nav className={`bg-yellow-500 text-black ${isCollapsed ? 'w-16' : 'w-64'} p-4 h-screen fixed transition-all duration-300`}>
        {isCollapsed ? (
          <ul className="flex flex-col items-center">
            {/* Icons repping nav links when collapsed */}
            <li>
            <Link to="/dashboard/admin/manage/users">
              <FontAwesomeIcon icon={['fas', 'users']} />
            </Link>
            </li>
            <li>
            <Link to="/dashboard/admin/manage/artwork">
              <FontAwesomeIcon icon={['fas', 'paint-brush']} />
            </Link>
          </li>
          {/* ... (add icons for other nav links) */}
          </ul>
        ) : (
          
        <ul>
          {getSidebarLinks()}
        </ul>
        )}
        <button className="mt-4 bg-white p-2 rounded-md" onClick={() => setCollapsed(!isCollapsed)}>
          {isCollapsed ? (
            <FontAwesomeIcon icon={['fas', 'expand']} />
          ) : (
            <FontAwesomeIcon icon={['fas', 'compress']} />
          )}
        </button>
      </nav>
    );
  };

  export default Sidebar;
  
  