import React, {useEffect, useState } from 'react';
import {Wrapper, Card, Gradient} from "../styles/Popular.styled";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  const getVeggie = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=e86dacad0dc243289d1377a4b5dd2776&number=9&tags=vegetarian`);
    const data = await api.json();
    setVeggie(data.recipes);
};

  useEffect(() => {
      getVeggie();
  }, []);



  return (
    <div>
             <Wrapper >
                <h3>Vegetarian Picks</h3>
                <Splide options={{ 
                    perPage: 3,
                    breakpoints: {
                        786: {perPage: 2},
                        480: {perPage: 1},
                    },
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: "5rem",
                }}>
                    {veggie.map((recipe) => {
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

export default Veggie;
