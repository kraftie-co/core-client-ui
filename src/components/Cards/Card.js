import * as React from 'react';
import styles from 'Card.module.css';
import { Flex, Image, Button } from 'rebass';
import PropTypes from 'prop-types';
import heart_icon from './res/heart_icon.png';
import bag from './res/bag.png';
import { addProductToFavourites } from '../../services/api/product.service';

function ProductsCard(props) {
  // const { t } = useTranslation();

  return (
    <div className={styles.cardContainer}>
      <Flex flexWrap="wrap" flexDirection={'row'} alignItems="center" backgroundColor={'#FFFFFF'}>
        <div className={styles.headerImage}>
          {/* TODO is this THE WAY?*/}
          <Image height="100%" width="100%" src={props.image}></Image>
        </div>
        <div className={styles.cardInformation}>
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{truncateName(props.name)}</span>
        </div>
        <div className={styles.priceAndButtons}>
          <div className={styles.price}>$ {props.price}</div>
          <div className={styles.buttons}>
            <Button className={styles.button} onClick={addToFavourites(props.id)}>
              <Image height={20} width={20} color="#FFFFFF" src={heart_icon}></Image>
            </Button>
            <Button marginBottom={10} className={styles.button} onClick={addToBasket}>
              <Image height={37} width={37} color="#FFFFFF" src={bag}></Image>
            </Button>
          </div>
        </div>
      </Flex>
    </div>
  );
}

ProductsCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

function addToFavourites(productId) {
  let productRequestObject = {
    id: '',
    productId: productId,
  };

  addProductToFavourites(productRequestObject);
}

function addToBasket() {
  console.log('soon to be implemented');
}

function truncateName(str) {
  return str.length > 60 ? str.substring(0, 60) + '...' : str;
}

export default ProductsCard;
