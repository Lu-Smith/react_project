import React, {useEffect, useState } from 'react';
import styled from 'styled-components';


function Popular() {
    const [popular, setPopular] = useState([]);
    useEffect(() => {
        getPopular();
    }, [])

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=e86dacad0dc243289d1377a4b5dd2776&number=9`)
        const data = await api.json();
        setPopular(data.recipes);
        console.log(data.recipes);
    }
  return (
    <div>
        {popular.map((recipe) => {
            return(
             <Wrapper key={recipe.id}>
                <h3>Popular Picks</h3>
                <Card>
                   <p>{recipe.title} /{recipe.vegan === false ? ("Vegan: no") : ("Vegan: yes")}/</p>
                   <img src={recipe.image} alt={recipe.title} />
                </Card>
             </Wrapper>
            );
        })}
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem  0;
`

const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;

    img {
        border-radius: 2rem;
    }
`

export default Popular;