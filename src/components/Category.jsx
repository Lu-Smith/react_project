import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiFrenchFries, GiChopsticks, GiSteak} from 'react-icons/gi';
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
       <SLink to={"/cuisine/French"}>
        <GiFrenchFries />
        <h4>French</h4>
       </SLink>
       <SLink to={"/cuisine/Chinese"}>
        <GiChopsticks />
        <h4>Chinese</h4>
       </SLink>
    </List>
  )
}



export default Category

