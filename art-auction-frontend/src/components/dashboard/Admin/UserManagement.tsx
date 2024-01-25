import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../common/Sidebar';

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'user1', role: 'seller' },
    { id: 2, username: 'user2', role: 'bidder' },
    { id: 3, username: 'user3', role: 'seller' },
    { id: 4, username: 'user4', role: 'bidder' },
    { id: 5, username: 'user5', role: 'seller' },
    { id: 6, username: 'user6', role: 'bidder' },
    // Add more mock user data or fetch from the backend
  ]);
  const navigate = useNavigate();

  const handleViewProfile = (userId: number) => {
    // Implementing logic to navigate to user profile page
    navigate(`/user/${userId}`);
  };

  const handleEditProfile = (userId: number) => {
    // Implement logic to edit user profile
    navigate(`/user/${userId}/edit`);
  };

  const handleDeleteUser = (userId: number) => {
    // Implement logic to delete user
    setUsers(users.filter(user => user.id !== userId));
  };

  useEffect(() => {
    //fetching user data from backend
  }, []);

  return (
    <div className="flex">
      <Sidebar persona="admin" />
      <div className="ml-64 p-8 w-full">
      <h1 className="text-2xl font-semibold mb-4">User Management</h1>
      <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Username</th>
            <th className="py-2 px-4 border-b">Role</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.id}</td>
              <td className="py-2 px-4 border-b">{user.username}</td>
              <td className="py-2 px-4 border-b">{user.role}</td>
              <td className="py-2 px-4 border-b">
                {/* Add edit and delete actions here */}
                <button className="text-blue-500 hover:underline mr-2" onClick={() => handleEditProfile(user.id)}>Edit</button>
                <button className="text-blue-500 hover:underline mr-2" onClick={() => handleViewProfile(user.id)}>View</button>
                <button className="text-red-500 hover:underline" onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
    </div>
  );
};

export default UserManagement;
