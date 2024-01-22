import React from 'react';

const UserManagement: React.FC = () => {
  const users = [
    { id: 1, username: 'user1', email: 'user1@example.com' },
    { id: 2, username: 'user2', email: 'user2@example.com' },
    // Add more mock user data or fetch from the backend
  ];

  const handleViewProfile = (userId: number) => {
    // Implement logic to view user profile
    console.log(`Viewing profile of user with ID ${userId}`);
  };

  const handleEditProfile = (userId: number) => {
    // Implement logic to edit user profile
    console.log(`Editing profile of user with ID ${userId}`);
  };

  const handleDeleteUser = (userId: number) => {
    // Implement logic to delete user
    console.log(`Deleting user with ID ${userId}`);
  };

  return (
    <div>
      <h2>User Management</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.username}</strong> - {user.email}
            <button onClick={() => handleViewProfile(user.id)}>View Profile</button>
            <button onClick={() => handleEditProfile(user.id)}>Edit Profile</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete User</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
