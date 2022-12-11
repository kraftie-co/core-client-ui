import React from 'react';
import Sizes from '../../../data/Sizes.js';
import { Select } from '@rebass/forms';
function SizeSelect() {
  return (
    <Select id="sizeSelect" name="sizeSelect" defaultValue=" " backgroundColor="#D9D9D9" border="0" height="54px">
      {Object.entries(Sizes).map(([key, size]) => (
        <option key={key}>{size}</option>
      ))}
    </Select>
  );
}

export default SizeSelect;
