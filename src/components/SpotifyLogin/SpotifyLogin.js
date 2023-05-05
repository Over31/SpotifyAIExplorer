import React from 'react';

const SpotifyLogin = ({ onClick }) => {
    return (
        <div>
            <h1>Spotify Implicit Grant Example</h1>
            <button onClick={onClick}>Login with Spotify</button>
        </div>
    );
};

export default SpotifyLogin;
