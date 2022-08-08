import React, {useEffect, useState } from 'react';


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
             <div key={recipe.id}>
                <p>{recipe.title}</p>
             </div>
            );
        })}
    </div>
  )
}

export default Popular;