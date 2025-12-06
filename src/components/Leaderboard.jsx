import React from 'react';

const Leaderboard = ({ users }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>🏆 Top Learner Minggu Ini</h3>
      </div>
      <div className="leaderboard-table-container">
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Nama</th>
              <th className="hide-mobile">Progress (Mat/Ass/Sub)</th>
              <th>Total Poin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className={index < 3 ? `rank-${index + 1}` : ''}>
                <td>{index + 1}</td>
                <td className="user-info">
                  <div className="avatar-circle">{user.name.charAt(0)}</div>
                  <span>{user.name}</span>
                </td>
                <td className="hide-mobile text-center">
                  {user.completedMaterials} / {user.completedAssessments} / {user.completedSubmissions}
                </td>
                <td className="points">✨ {user.totalPoints}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;