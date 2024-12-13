import React from 'react';
import './Leaderboard.css';  

const Leaderboard = ({ users }) => {
  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-title">Leaderboard</h2>
      <ul className="leaderboard-list">
        {users.map((user, index) => (
          <li key={user._id} className="leaderboard-item">
            <span className="leaderboard-rank">{index + 1}</span>
            <span className="leaderboard-name">{user.name}</span>
            <span className="leaderboard-points">{user.totalPoints} points</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
