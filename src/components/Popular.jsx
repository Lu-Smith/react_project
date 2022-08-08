import React, {useEffect} from 'react';

function Popular() {

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=e86dacad0dc243289d1377a4b5dd2776&number=9`);
        const data = await api.json();
        console.log(data);
    }
  return (
    <div>Popular</div>
  )
}

export default Popular;