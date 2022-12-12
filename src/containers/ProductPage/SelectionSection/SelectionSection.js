import React from 'react';
import { Flex, Text, Button } from 'rebass';
import testProduct from 'data/Product.js';
import ColorSelect from 'ColorSelect';
import SizeSelect from 'SizeSelect';
import { FaHeart } from 'react-icons/fa';

function SelectionSection() {
  return (
    <Flex minHeight="170px" width="607px" marginLeft="52px" flexDirection="column">
      <Flex>
        <Text font="Inter" fontSize="20px" line-height="24px" fontWeight="bold">
          {testProduct.name}
        </Text>
      </Flex>

      <Flex flexDirection="row" marginTop="20px" alignItems="flex-end">
        <Text font="Inter" fontWeight="bold" fontSize="30px" lineHeight="36px">
          Customize
        </Text>
        <Text marginLeft="230px" fontSize="20px">
          ${testProduct.price}
        </Text>
      </Flex>

      <Flex marginTop="20px" flexDirection="column">
        <Text font="Inter" fontSize="20px" lineHeight="24px" marginBottom="5px">
          Color
        </Text>
        <ColorSelect />
        <Text font="Inter" fontSize="20px" lineHeight="24px" marginBottom="5px" marginTop="10px">
          Size
        </Text>
        <SizeSelect />

        <Button
          marginTop="60px"
          backgroundColor="#034C65"
          border="3px"
          borderRadius="12px"
          height="70px"
          fontSize="30px"
          fontWeight="bold"
        >
          Add to cart
        </Button>
        <Button
          variant="outline"
          marginTop="20px"
          backgroundColor="#EBFAFE"
          border="2px"
          borderRadius="12px"
          fontSize="30px"
          height="70px"
          //borderColor="red"
          color="#034C65"
          fontWeight="bold"
          style={{ border: '3px solid #034C65' }}
        >
          <FaHeart width="46.67px" height="26.7px" paddingRight="35px" cursor="pointer" />
          Add to favorites
        </Button>
      </Flex>
    </Flex>
  );
}

export default SelectionSection;
