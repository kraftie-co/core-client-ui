import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

function Button({ onClick, style, children }) {
  return (
    <ButtonStyled onClick={onClick} style={style}>
      {children}
    </ButtonStyled>
  );
}

Button.propTypes = {
  children: PropTypes.node || PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: null,
  style: {},
  onClick: null,
};

export default Button;
