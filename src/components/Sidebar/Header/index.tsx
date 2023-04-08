import './index.css';

import React from 'react';

const Header: React.FC = () => {
  return (
  <div className='container'>
    <img className='image' src='https://media-private.canva.com/psIwo/MAExmIpsIwo/1/s.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230407%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230407T181604Z&X-Amz-Expires=99531&X-Amz-Signature=4434c11b07d2577af0172391fbb803373bb3a6297309ee124ba878409443323e&X-Amz-SignedHeaders=host&response-expires=Sat%2C%2008%20Apr%202023%2021%3A54%3A55%20GMT' alt='logo' />
    <span className='header-text'>PORTAL</span>
  </div>
  )
}

export default Header