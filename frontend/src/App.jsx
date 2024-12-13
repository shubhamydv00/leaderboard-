import React, { useState, useEffect } from 'react';
import UserSelect from './components/UserSelect';
import Leaderboard from './components/Leaderboard';
import { getUsers } from './Api';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getUsers();
      setUsers(usersData);
    };
    fetchUsers();
  }, []);

  const handleClaim = (updatedUser) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.map((user) =>
        user._id === updatedUser._id ? updatedUser : user
      );
      return updatedUsers.sort((a, b) => b.totalPoints - a.totalPoints);
    });
  };

  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <div>
      <UserSelect onClaim={handleClaim} onAddUser={handleAddUser} users={users} />
      <Leaderboard users={users} />
    </div>
  );
};

export default App;
