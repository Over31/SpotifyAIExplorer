import React, { useState, useEffect } from 'react';
import SpotifyLogin from './components/SpotifyLogin/SpotifyLogin';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    const clientId = '984398d1960a4c608d4aa2388a0eedc9';
    const redirectUri = encodeURIComponent('http://localhost:3000/callback');
    const scopes = encodeURIComponent('user-read-private user-read-email');
    const responseType = 'token';

    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=${responseType}`;

    window.location.href = authUrl;
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.hash.substr(1));
    const accessToken = urlParams.get('access_token');
    if (accessToken) {
      fetch('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setUser(data));
    }
  }, []);

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.display_name}!</p>
          <img src={user.images[0].url} alt="Profile" />
        </>
      ) : (
        <SpotifyLogin onClick={handleLogin} />
      )}
    </div>
  );
}

export default App;
