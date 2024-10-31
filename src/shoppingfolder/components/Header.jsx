import React, { useState } from 'react';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signedInUser, setSignedInUser] = useState(null); // State to hold the signed-in user

  const handleSignIn = () => {
    // Set the signed-in user and close the modal
    setSignedInUser(username);
    setIsModalOpen(false);
    // Clear the input fields (optional)
    setUsername('');
    setPassword('');
  };

  return (
    <div className='headerSection'>
      <div className="left">
        <div className="title">
          <h2>Shopping Mall</h2>
        </div>
      </div>
      <div className="center">
        <ul>
          <li>Woman</li>
          <li>Men</li>
          <li>Children</li>
          <li>Beauty</li>
        </ul>
      </div>
      <div className="search">
        <input type="text" placeholder='Search...' />
      </div>
      <div className="right">
        {signedInUser ? ( // Check if the user is signed in
          <div className="userGreeting">
            Welcome, {signedInUser}!
          </div>
        ) : (
          <button className="signin" onClick={() => setIsModalOpen(true)}>
            Sign In / Sign Up
          </button>
        )}
        <div className="cart">
          Cart
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
            <h2>Sign In</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignIn}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
