import React from 'react';
import PropTypes from 'prop-types';
import { InputStyled } from './Input.styled';

function Input({ placeholder, type, onInput, style }) {
  return <InputStyled placeholder={placeholder} type={type} onInput={onInput} style={style} />;
}

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onInput: PropTypes.func,
  style: PropTypes.object,
};

Input.defaultProps = {
  placeholder: '',
  type: '',
  onInput: null,
  style: {},
};

export default Input;
