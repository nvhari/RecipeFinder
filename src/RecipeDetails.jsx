import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './RecipeDetails.css'

const RecipeDetails = () => {
    let { id } = useParams();
    const [recipe,setRecipe] = useState(null)
   
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response=>response.json())
        .then(data=>data.meals?setRecipe(data.meals[0]):null)
    },[id])

    if (!recipe) return <p>Loading...</p>;
  return (
    <div className="recipe-details">
        <h2 className="recipe-title">{recipe.strMeal}</h2>

        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
        <p className="recipe-instructions">{recipe.strInstructions}</p>

    </div>
  )
}

export default RecipeDetails