import React, {useEffect, useState } from 'react';
import {Wrapper, Card, Gradient} from "../styles/Popular.styled";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';



function Popular() {
    const [popular, setPopular] = useState([]);

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=e86dacad0dc243289d1377a4b5dd2776&number=9`)
        const data = await api.json();
        setPopular(data.recipes);
    };

    useEffect(() => {
        getPopular();
    }, [])


  return (
    <div>
             <Wrapper >
                <h3>Popular Picks</h3>
                <Splide options={{ 
                    perPage: 3, 
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: "5rem",
                }}>
                    {popular.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                   <Card>
                                      <Link to={"/recipe/" + recipe.id}>
                                        <p>{recipe.title} {recipe.vegan === false ? (null) : ("(Vegan ✅)")} </p>
                                        <img src={recipe.image} alt={recipe.title} />
                                        <Gradient />
                                      </Link>
                                   </Card>
                            </SplideSlide>
                        );
                    })}
                </Splide>
             </Wrapper>
    </div>
  )
}




export default Popular;