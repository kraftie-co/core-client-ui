import * as React from 'react';
import { Card } from 'rebass';

function ProductsCard(product) {
  // const { t } = useTranslation();

  return (
    <Card sx={{ maxWidth: 370 }}>
      <div>
        <img
          src=" ../../public/static/images/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <div>
          <h4>
            {product.name}
          </h4>
          <p>
            {product.description}
          </p>
        </div>
      </div>
      <div>
        <button size="small" color="primary">
          Share
        </button>
      </div>
    </Card>
  );
}

export default ProductsCard;
