import React, {useEffect, useState } from 'react';
import {Wrapper, Card, Gradient} from "../styles/Popular.styled";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

function Veggie() {
  const [veggie, setVeggie] = useState([]);
  useEffect(() => {
      getVeggie();
  }, [])

  const getVeggie = async () => {

      const check = localStorage.getItem("veggie");

      if(check) {
          setVeggie(JSON.parse(check));
      }else{
          const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=e86dacad0dc243289d1377a4b5dd2776&number=9&tags=vegeterian`)
          const data = await api.json();
          localStorage.setItem("veggie", JSON.stringify(data.recipes));
          setVeggie(data.recipes);
          console.log(data.recipes);
      };
  }
  return (
    <div>
             <Wrapper >
                <h3>Vegetarian Picks</h3>
                <Splide options={{ 
                    perPage: 3, 
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: "5rem",
                }}>
                    {veggie.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                   <Card>
                                      <p>{recipe.title} {recipe.vegan === false ? (null) : ("(Vegan ✅)")} </p>
                                      <img src={recipe.image} alt={recipe.title} />
                                      <Gradient />
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
