import React, { useState } from 'react';
import { claimPoints, addUser } from "../Api";  
import './UserSelect.css';

const UserSelect = ({ onClaim, onAddUser, users }) => {
  const [selectedUser, setSelectedUser] = useState('');
  const [newUserName, setNewUserName] = useState(''); 
  const [error, setError] = useState('');

  const handleClaim = async () => {
    if (selectedUser) {
      const result = await claimPoints(selectedUser);
      onClaim(result.user);  
    }
  };

  const handleAddUser = async () => {
    if (!newUserName) {
      setError('User name cannot be empty');
      return;
    }

    try {
      const newUser = await addUser(newUserName); 
      onAddUser(newUser);  
      setNewUserName(''); 
      setError('');
    } catch (error) {
      setError('Failed to add user');
    }
  };

  return (
    <div className="user-select-container">
      <h3>Select a User to Claim Points</h3>
      <div className="select-wrapper">
        <select
          className="user-dropdown"
          onChange={(e) => setSelectedUser(e.target.value)}
          value={selectedUser}
        >
          <option value="">Select a user</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
      <button
        className={`claim-button ${!selectedUser ? 'disabled' : ''}`}
        onClick={handleClaim}
        disabled={!selectedUser}
      >
        Claim Points
      </button>

      <h3>Add a New User</h3>
      <div className="add-user-container">
        <input
          type="text"
          className="new-user-input"
          placeholder="Enter new user name"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <button
          className="add-user-button"
          onClick={handleAddUser}
        >
          Add User
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default UserSelect;
