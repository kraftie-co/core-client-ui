/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Flex } from 'rebass';

function PhotoList({ photoList }) {
  const [mainPic, setMainPic] = useState(photoList[0]?.pictureUrl);
  return (
    <Flex>
      <Flex
        maxHeight="370px"
        maxWidth="150px"
        flexDirection="column"
        style={{ overflow: 'auto' }}
        backgroundColor="white"
      >
        {photoList.map((url, index) => (
          <img
            style={{ marginBottom: '20px' }}
            key={index}
            src={url.pictureUrl}
            onClick={() => setMainPic(url.pictureUrl)}
          />
        ))}
      </Flex>
      <Flex maxWidth="400px" marginRight="30px">
        <img style={{ marginLeft: '20px', maxWidth: '520px' }} key="mainPic" src={mainPic} />
      </Flex>
    </Flex>
  );
}

export default PhotoList;
