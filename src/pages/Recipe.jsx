import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Recipe() {

    let params = useParams();
    const [details, setDetailes] = useState({});

const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=e86dacad0dc243289d1377a4b5dd2776`);
    const detailData = await data.json();
    setDetailes(detailData);
}

useEffect(() => {
   fetchDetails();
}, [params.name]);

  return (
    <div>{details.title}</div>
  )
}

export default Recipe;