import React from 'react';
import { Flex, Box, Button, Image } from 'rebass';
import { Input } from '@rebass/forms';
import PropTypes from 'prop-types';
//import SearchIcon from '@mui/icons-material/Search';
//import { t } from 'i18next';
import { bindActionCreators } from 'redux';
import { searchBarActions } from '../../store/slices/searchBarSlice';
import { connect } from 'react-redux';
import search_icon from './res/search_icon.png';

function SearchBar({ value, changeValue }) {
  return (
    <Flex width={1}>
      <Box width={9 / 10}>
        <Input
          height={50}
          style={{ color: 'black', '::placeholder': '#EBFAFE', border: 0, marginTop: 25 }}
          id="product"
          name="product"
          type="text"
          placeholder="Search for a product..."
          color="white"
          bg="#D9D9D9"
          value={value}
          onChange={(e) => changeValue(e.target.value)}
        ></Input>
      </Box>
      <Box width={1 / 10} height={1}>
        <Button height={50} color="#D9D9D9" backgroundColor="#034C65" style={{ marginTop: 25 }}>
          <Image src={search_icon}></Image>
        </Button>
      </Box>
    </Flex>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.searchBar.value,
});

const mapDispatchProps = (dispatch) => ({
  changeValue: bindActionCreators((newValue) => searchBarActions.changeValue(newValue), dispatch),
});

export default connect(mapStateToProps, mapDispatchProps)(SearchBar);
