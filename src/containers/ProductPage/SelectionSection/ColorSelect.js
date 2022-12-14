import React from 'react';
import Colors from '../../../data/Colors';
import { Select } from '@rebass/forms';
function ColorSelect() {
  return (
    <Select
      id="colorSelect"
      name="colorSelect"
      defaultValue=" "
      backgroundColor="#D9D9D9"
      border="0px"
      // borderRadius="50%"
      height="54px"
      style={{ border: '0' }}
    >
      {Object.entries(Colors).map(([key, color]) => (
        <option key={key}>{color}</option>
      ))}
    </Select>
  );
}

export default ColorSelect;
