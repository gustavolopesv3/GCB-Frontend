import { Link } from 'react-router-dom';

import { Nav } from './styles';

export const Header = () => {
  return (
    <Nav>
      <Link to="/">
        <div className="logo">Healthy food</div>
      </Link>

      <div>
        <ul>
          <li>HEALTHY RECIPES</li>
          <li>BLOG</li>
          <li>JOIN</li>
          <Link to="/register">
            <li>REGISTER</li>
          </Link>
        </ul>
      </div>
    </Nav>
  );
};
