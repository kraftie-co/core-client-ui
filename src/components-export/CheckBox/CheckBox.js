import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledCheckBox } from './CheckBox.Styled';

const CheckBox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <StyledCheckBox>
      <label>
        <input type="checkbox" checked={isChecked} onChange={() => setIsChecked((prev) => !prev)} />
        <span>{label}</span>
      </label>
    </StyledCheckBox>
  );
};

CheckBox.propTypes = {
  label: PropTypes.string.required,
};

export { CheckBox };
