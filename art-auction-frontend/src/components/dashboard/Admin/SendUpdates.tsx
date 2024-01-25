import React, { useState } from 'react';
import Sidebar from '../../common/Sidebar';

const SendUpdates: React.FC = () => {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [updateMessage, setUpdateMessage] = useState('');

  const handleUserSelection = (userType: string) => {
    // Implement logic to fetch users based on userType (seller, bidder, etc.)
    const fetchedUsers: string[] = []; // Placeholder, fetch users based on userType
    setSelectedUsers(fetchedUsers);
  };

  const handleSendMessage = () => {
    // Implement logic to send updates to selected users
    console.log(`Sending update message to: ${selectedUsers.join(', ')}`);
    console.log(`Update Message: ${updateMessage}`);
    // Placeholder: Implement actual logic to send updates (e.g., using a notification system or email)
  };

  return (
    <div className="flex">      
      <Sidebar persona="admin" />
      <div className="ml-64 p-8 w-full">
        <h2 className="tex-2xl font-semibold mb-4">Send Updates</h2>
        <div className="mb-4">
        <label className="block mb-2">Select User Type:</label>
        <select
        className="border border-gray-300 rounded-md py-2 px-4" onChange={(e) => handleUserSelection(e.target.value)}>
          <option value="seller">Sellers</option>
          <option value="bidder">Bidders</option>
          {/* Add more options based on your user types */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Selected Users:</label>
        <ul className="list-disc pl-4">
          {selectedUsers.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Update Message:</label>
        <textarea
        className="border border-gray-300 rounded-md w-full p-2" value={updateMessage} onChange={(e) => setUpdateMessage(e.target.value)} />
      </div>
      <button
      className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" onClick={handleSendMessage}>Send Updates</button>
    </div>
    </div>
  );
};

export default SendUpdates;
