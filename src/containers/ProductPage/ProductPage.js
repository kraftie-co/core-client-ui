import React from 'react';
import PhotoAndDescriptionSection from 'PhotoAndDescriptionSection';
import SelectionSection from 'SelectionSection';
import { useParams } from 'react-router-dom';
import { Container } from './ProductPage.styled';

function ProductPage() {
  const { id } = useParams();

  console.log(id);
  return (
    <Container>
      <PhotoAndDescriptionSection />
      <SelectionSection />
    </Container>
  );
}

export default ProductPage;
