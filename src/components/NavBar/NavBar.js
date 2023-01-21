import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

import Button from '../../components-export/Button/Button';
import Input from '../../components-export/Input/Input';
import { NavBarStyled } from './NavBar.styled';

function NavBar() {
  const theme = useTheme();

  return (
    <NavBarStyled>
      <div>
        <img src="/path/to/logo.png" />
        <label>Logo</label>
      </div>
      <div>
        <Input
          type="text"
          placeholder="Search for a product..."
          style={{
            height: '3rem',
            borderRadius: '0rem',
            borderTopLeftRadius: '1rem',
            borderBottomLeftRadius: '1rem',
            boxShadow: 'none',
          }}
        />
        <Button
          style={{
            height: '3rem',
            borderRadius: 0,
            borderTopRightRadius: '1rem',
            borderBottomRightRadius: '1rem',
            boxShadow: 'none',
            backgroundColor: theme.ui12,
          }}
        >
          <SearchIcon />
        </Button>
      </div>
      <div>
        <Link to="/">
          <Button>Button 1</Button>
        </Link>
        <Link to="/products">
          <Button>Button 2</Button>
        </Link>
        <Link to="/cart">
          <Button>Button 3</Button>
        </Link>
      </div>
    </NavBarStyled>
  );
}

export default NavBar;
