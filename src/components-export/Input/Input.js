import React from 'react';
import PropTypes from 'prop-types';
import { InputStyled } from './Input.styled';

function Input({ otherProps, placeholder, type, onInput, style }) {
  return <InputStyled placeholder={placeholder} otherProps={otherProps} type={type} onInput={onInput} style={style} />;
}

Input.propTypes = {
  otherProps: PropTypes.object,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onInput: PropTypes.func,
  style: PropTypes.object,
};

Input.defaultProps = {
  otherProps: {},
  placeholder: '',
  type: '',
  onInput: null,
  style: {},
};

export default Input;
