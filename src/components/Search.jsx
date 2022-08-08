import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FormStyle } from '../styles/Search.styled';
import { useNavigate } from 'react-router-dom';

function Search() {
const [input, setInput] = useState("");
const navigate = useNavigate();

const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
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