import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks, GiSteak} from 'react-icons/gi';
import {List, SLink} from '../styles/Category.styled';



import React from 'react'

const Category = () => {
  return (
    <List>
       <SLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
       </SLink>
       <SLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
       </SLink>
       <SLink to={"/cuisine/British"}>
        <GiSteak />
        <h4>British</h4>
       </SLink>
       <SLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
       </SLink>
       <SLink to={"/cuisine/Chinese"}>
        <GiChopsticks />
        <h4>Chinese</h4>
       </SLink>
    </List>
  )
}



export default Category

