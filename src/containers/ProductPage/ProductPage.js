import React from 'react';
import { Flex } from 'rebass';
import PhotoAndDescriptionSection from 'PhotoAndDescriptionSection';
import SelectionSection from 'SelectionSection';

function ProductPage() {
  return (
    <Flex height="100%" marginLeft="140px" marginRight="140px" marginTop="40px">
      <PhotoAndDescriptionSection />
      <SelectionSection />
    </Flex>
  );
}

export default ProductPage;
