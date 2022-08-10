import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, DetailedWrapper, Info } from "../styles/Recipe.styled";

function Recipe() {

    let params = useParams();
    const [details, setDetailes] = useState({});
    const [activeTab, setActiveTab] = useState('instractions');

const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=e86dacad0dc243289d1377a4b5dd2776`);
    const detailData = await data.json();
    setDetailes(detailData);
}

useEffect(() => {
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
      </Info>
    </DetailedWrapper>
  )
}

export default Recipe;