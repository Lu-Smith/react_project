import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FormStyle } from '../styles/Search.styled';

function Search() {
  return (
    <FormStyle>
        <div>
        <FaSearch></FaSearch>
        <input type="text" />
        </div>
    </FormStyle>
  )
}

export default Search;