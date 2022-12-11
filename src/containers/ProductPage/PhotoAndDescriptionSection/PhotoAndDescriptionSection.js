import React from 'react';
import { Flex } from 'rebass';
import testProduct from 'data/Product.js';

function PhotoAndDescriptionSection() {
  return (
    <Flex flexDirection="column" width="778px">
      <Flex height="370PX" backgroundColor="#EBFAFE" />
      <Flex marginTop="35px" fontWeight="bold" fontSize="20px" font="Inter">
        Description
      </Flex>
      <Flex marginTop="7px" font="Inter" fontSize="16px">
        {testProduct.description}
      </Flex>
    </Flex>
  );
}

export default PhotoAndDescriptionSection;
