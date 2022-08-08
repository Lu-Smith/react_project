import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FormStyle } from '../styles/Search.styled';

function Search() {
const [input, setInput] = useState("");

const submitHandler = (e) => {
    e.preventDefault();
    console.log("hey");
};

  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
        <FaSearch></FaSearch>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        <h4>{input}</h4>
        </div>
    </FormStyle>
  )
}

export default Search;