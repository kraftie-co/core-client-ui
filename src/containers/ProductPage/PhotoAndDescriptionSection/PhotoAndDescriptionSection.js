/* eslint-disable react/prop-types */
import React from 'react';
import { Flex } from 'rebass';
import PhotoList from 'PhotoList';

function PhotoAndDescriptionSection({ product }) {
  return (
    <Flex flexDirection="column" width="778px">
      <Flex height="370PX" backgroundColor="white">
        {product && <PhotoList photoList={product?.photoUrls} />}
      </Flex>

      <Flex marginTop="35px" fontWeight="bold" fontSize="20px" font="Inter">
        Description
      </Flex>
      <Flex marginTop="7px" font="Inter" fontSize="16px">
        {product?.description}
      </Flex>
    </Flex>
  );
}

export default PhotoAndDescriptionSection;
