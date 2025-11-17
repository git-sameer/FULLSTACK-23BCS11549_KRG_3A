
import React from 'react';


function UserProfile({ username }) {
  return <div>UserProfile: {username}</div>;
}


function Icon({ username }) {
  return (
    <div>
      <span>🔔 Icon</span>
      <UserProfile username={username} />
    </div>
  );
}

function Header({ username }) {
  return (
    <header>
      <h1>Small App Header</h1>
      <Icon username={username} />
    </header>
  );
}

export default Header;


