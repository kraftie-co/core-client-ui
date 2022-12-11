import React from 'react';
import { Flex } from 'rebass';
import PhotoSection from 'PhotoSection';
import CostumiseSection from 'CostumiseSection';

function ProductPage() {
  return (
    <Flex height="100%" marginLeft="140px" marginRight="140px" marginTop="40px">
      <PhotoSection />
      <CostumiseSection />
    </Flex>
  );
}

export default ProductPage;
