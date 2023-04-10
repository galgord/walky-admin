import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { PAGES } from '../../routes/types';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log('here')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#19313C',
      }}
    >
      <img
        src="https://media-private.canva.com/psIwo/MAExmIpsIwo/1/s.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230407%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230407T181604Z&X-Amz-Expires=99531&X-Amz-Signature=4434c11b07d2577af0172391fbb803373bb3a6297309ee124ba878409443323e&X-Amz-SignedHeaders=host&response-expires=Sat%2C%2008%20Apr%202023%2021%3A54%3A55%20GMT"
        alt="logo"
        style={{ width: '150px', height: '100px', marginBottom: '20px' }}
      />
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          style={{ padding: '10px', marginBottom: '10px', borderRadius: '5px', border: 'none' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          style={{ padding: '10px', marginBottom: '20px', borderRadius: '5px', border: 'none' }}
        />
        <Link to={PAGES.INSIGHTS}>
        <button
          type="submit"
          style={{
            padding: '10px',
            backgroundColor: 'white',
            color: '#19313C',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
