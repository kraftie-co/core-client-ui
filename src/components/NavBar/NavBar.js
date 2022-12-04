import SearchBar from '../SearchBar';
import { Flex, Box, Image, Text, Button } from 'rebass';

import React from 'react';
import kraftie_logo from './res/kraftie_logo.png';
import wishlist_icon from './res/wishlist_icon.png';
import cart_icon from './res/cart_icon.png';
import profile_icon from './res/profile_icon.png';

function Navbar() {
  return (
    <Flex width={1} height={100} flexWrap="wrap" flexDirection={'row'} alignItems="center" backgroundColor={'#0B6884'}>
      <Box minHeight={100} width={1 / 20} backgroundColor={'#0B6884'}></Box>
      <Box minHeight={100} width={1.3 / 20} backgroundColor={'#0B6884'}>
        <Image src={kraftie_logo}></Image>
      </Box>
      <Box width={2 / 10} minHeight={100} backgroundColor={'#0B6884'}>
        <Text fontSize={[35, 50, 70]} fontFamily="Inter" fontWeight={400} color="#EBFAFE">
          Kraftie
        </Text>
      </Box>
      <Box width={9 / 20} minHeight={100}>
        <SearchBar></SearchBar>
      </Box>
      <Box width={1 / 20} minHeight={100}></Box>
      <Box width={1 / 20} minHeight={100} alignItems="center" backgroundColor={'#0B6884'}>
        <Button height={40} style={{ borderRadius: '50%', display: 'flex', alignItems: 'center', marginTop: 25 }}>
          <Image height={20} color="#034C65" src={wishlist_icon}></Image>
        </Button>
      </Box>

      <Box width={1 / 20} minHeight={100} alignItems="center">
        <Button height={40} style={{ borderRadius: '50%', display: 'flex', alignItems: 'center', marginTop: 25 }}>
          <Image color="#034C65" src={cart_icon}></Image>
        </Button>
      </Box>
      <Box width={1 / 20} minHeight={100} alignItems="center">
        <Button height={40} style={{ borderRadius: '50%', display: 'flex', alignItems: 'center', marginTop: 25 }}>
          <Image color="#034C65" src={profile_icon}></Image>
        </Button>
      </Box>
      <Box minHeight={50} width={1 / 5} backgroundColor={'#034C65'}></Box>
      <Box minHeight={50} width={1 / 10} backgroundColor={'#034C65'} alignItems="center">
        <Text fontSize={16} fontFamily="Inter" fontWeight={400} marginTop={15} color="#EBFAFE">
          Jewelry & Accessories
        </Text>
      </Box>
      <Box minHeight={50} width={1 / 10} backgroundColor={'#034C65'} alignItems="center">
        <Text fontSize={16} fontFamily="Inter" fontWeight={400} marginTop={15} color="#EBFAFE">
          Clothing and shoes
        </Text>
      </Box>
      <Box minHeight={50} width={1 / 10} backgroundColor={'#034C65'} alignItems="center">
        <Text fontSize={16} fontFamily="Inter" fontWeight={400} marginTop={15} color="#EBFAFE">
          Home and living
        </Text>
      </Box>
      <Box minHeight={50} width={1 / 10} backgroundColor={'#034C65'} alignItems="center">
        <Text fontSize={16} fontFamily="Inter" fontWeight={400} marginTop={15} color="#EBFAFE">
          Wedding and party
        </Text>
      </Box>
      <Box minHeight={50} width={1 / 10} backgroundColor={'#034C65'} alignItems="center">
        <Text fontSize={16} fontFamily="Inter" fontWeight={400} marginTop={15} color="#EBFAFE">
          Toys & Entertainment
        </Text>
      </Box>
      <Box minHeight={50} width={1 / 10} backgroundColor={'#034C65'} alignItems="center">
        <Text fontSize={16} fontFamily="Inter" fontWeight={400} marginTop={15} color="#EBFAFE">
          Art & Collectibles
        </Text>
      </Box>
      <Box minHeight={50} width={1 / 5} backgroundColor={'#034C65'}></Box>
    </Flex>
  );
}

export default Navbar;
