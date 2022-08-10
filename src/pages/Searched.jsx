import { useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { Grid, Card } from '../styles/Searched.styled';

function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=e86dacad0dc243289d1377a4b5dd2776&query=${name}`);
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    };

    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);

  return (
    <Grid>
        {searchedRecipes.map((item) => {
            return (
                <Card key={item.id}>
                  <Link to= {'/recipe/' + item.id}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                  </Link>
                </Card>
            )
        })}
    </Grid>
  )
}

export default Searched;