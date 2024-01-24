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
                <Link to="/dashboard/admin/manage/users">
                  <FontAwesomeIcon icon={['fas', 'users']} />
                  {!isCollapsed && 'Users'}
                  </Link>
              </li>
              <li>
                <Link to="/dashboard/admin/manage/artwork">
                  <FontAwesomeIcon icon={['fas', 'paint-brush']} />
                  {!isCollapsed && 'Artwork'}
                  </Link>
              </li>
              <li>
              <Link to="/dashboard/admin/manage/categories">
                <FontAwesomeIcon icon={['fas', 'list-alt']} />
                {!isCollapsed && 'Categories'}
              </Link>
            </li>
            <li>
              <Link to="/dashboard/admin/view-bids">
                <FontAwesomeIcon icon={['fas', 'eye']} />
                {!isCollapsed && 'View Bids'}
              </Link>
            </li>
            <li>
              <Link to="/dashboard/admin/send-emails">
                <FontAwesomeIcon icon={['fas', 'envelope']} />
                {!isCollapsed && 'Send Emails'}
              </Link>
            </li>
            <li>
              <Link to="/dashboard/admin/notifications">
                <FontAwesomeIcon icon={['fas', 'bell']} />
                {!isCollapsed && 'Notifications'}
              </Link>
            </li>
            <li>
              <Link to="/logout">
                <FontAwesomeIcon icon={['fas', 'sign-out-alt']} />
                {!isCollapsed && 'Logout'}
              </Link>
            </li>

            </>
          );
  
        case 'seller':
          return (
            <>
               <li>
              <Link to="/dashboard/seller/add-artwork">
                <FontAwesomeIcon icon={['fas', 'plus']} />
                {!isCollapsed && 'Add Artwork'}
              </Link>
            </li>
            <li>
              <Link to="/dashboard/seller/my-artwork">
                <FontAwesomeIcon icon={['fas', 'images']} />
                {!isCollapsed && 'My Artwork'}
              </Link>
            </li>
            <li>
              <Link to="/dashboard/seller/closed-bids">
                <FontAwesomeIcon icon={['fas', 'file-archive']} />
                {!isCollapsed && 'Closed Bids'}
              </Link>
            </li>
            <li>
              <Link to="/dashboard/seller/bids">
                <FontAwesomeIcon icon={['fas', 'gavel']} />
                {!isCollapsed && 'Bids'}
              </Link>
            </li>
            <li>
              <Link to="/dashboard/seller/my-wallet">
                <FontAwesomeIcon icon={['fas', 'wallet']} />
                {!isCollapsed && 'My Wallet'}
              </Link>
            </li>
            <li>
              <Link to="/dashboard/seller/notifications">
                <FontAwesomeIcon icon={['fas', 'bell']} />
                {!isCollapsed && 'Notifications'}
              </Link>
            </li>
            <li>
              <Link to="/logout">
                <FontAwesomeIcon icon={['fas', 'sign-out-alt']} />
                {!isCollapsed && 'Logout'}
              </Link>
            </li>
            </>
          );
  
        case 'bidder':
          return (
            <>
             <li>
              <Link to="/dashboard/bidder/my-bids">
                <FontAwesomeIcon icon={['fas', 'hand-holding-usd']} />
                {!isCollapsed && 'My Bids'}
              </Link>
            </li>
            <li>
              <Link to="/dashboard/bidder/my-wins">
                <FontAwesomeIcon icon={['fas', 'trophy']} />
                {!isCollapsed && 'My Wins'}
              </Link>
            </li>
            <li>
              <Link to="/dashboard/bidder/my-orders">
                <FontAwesomeIcon icon={['fas', 'list-ul']} />
                {!isCollapsed && 'My Orders'}
              </Link>
            </li>
            <li>
              <Link to="/dashboard/bidder/notifications">
                <FontAwesomeIcon icon={['fas', 'bell']} />
                {!isCollapsed && 'Notifications'}
              </Link>
            </li>
            <li>
              <Link to="/logout">
                <FontAwesomeIcon icon={['fas', 'sign-out-alt']} />
                {!isCollapsed && 'Logout'}
              </Link>
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
        {getSidebarLinks()} {/* Render the collapsed sidebar links directly */}
      </ul>
    ) : (
      <div className="flex flex-col">
        <div className="flex items-center mb-4">
          {/* Avatar */}
          <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
          {/* Persona */}
          {!isCollapsed && <span className="text-lg font-bold">{persona}</span>}
        </div>
        <ul className="space-y-2">
          {getSidebarLinks()}
        </ul>
      </div>
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
  
  