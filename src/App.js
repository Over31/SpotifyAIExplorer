import React from 'react';
import SpotifyLogin from './components/SpotifyLogin';

function App() {
  const handleLogin = () => {
    const clientId = '984398d1960a4c608d4aa2388a0eedc9';
    const redirectUri = encodeURIComponent('http://localhost:3000/callback');
    const scopes = encodeURIComponent('user-read-private user-read-email');
    const responseType = 'token';

    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=${responseType}`;

    window.location.href = authUrl;
  };

  return (
    <div>
      <SpotifyLogin onClick={handleLogin} />
    </div>
  );
}

export default App;
