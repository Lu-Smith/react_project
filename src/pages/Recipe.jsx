import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, DetailedWrapper, Info } from "../styles/Recipe.styled";

function Recipe() {

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instractions');



useEffect(() => {
  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=e86dacad0dc243289d1377a4b5dd2776`);
    const detailData = await data.json();
    setDetails(detailData);
  }
  fetchDetails();
}, [params.name]);

  return (
    <DetailedWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button className={activeTab === 'instractions' ? 'active' : ''} onClick={() => setActiveTab('instractions')}>Instructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
      {activeTab === 'instractions' && (
        <div>
          <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
          <h3 dangerouslySetInnerHTML={{__html: details.instractions}}></h3>
        </div>
      )}
      {activeTab === 'ingredients' && (
           <ul>
           {details.extendedIngredients.map((ingredient) => (
             <li key={ingredient.id}>{ingredient.original}</li>
           ))}
         </ul>
      )}
      </Info>
    </DetailedWrapper>
  )
}

export default Recipe;