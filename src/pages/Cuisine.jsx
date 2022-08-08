import React, { useState, useEffect } from 'react';
import {Grid, Card} from '../styles/Cuisine.styled';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';


function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=e86dacad0dc243289d1377a4b5dd2776&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results);
    };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <Grid>
        {cuisine.map((item) => {
            return(
                <Card key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                </Card>
            );
        })}
    </Grid>
  )
}




export default Cuisine;