import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div style={{ fontSize: '3em' }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'var(--blue-secondary)', fontFamily: 'ZCOOL XiaoWei' }}>HOMEPAGE</Link>
    </div>
  );
}

export default Logo;
