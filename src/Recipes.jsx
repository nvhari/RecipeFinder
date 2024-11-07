import { useEffect,useState } from "react"
import { Link } from "react-router-dom"

const Recipes = ()=>{
    const [items,setItems] = useState([])
    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken")
        .then(response=>response.json())
        .then(data=>{
            setItems(data.meals)
        })
    },[])
    return(
        <>
        <ul>
        <h2>Recipe List</h2>
            {items.map((item)=>(
                <li key={item.idMeal}>
                   <Link to={`/recipes/${item.idMeal}`}> 
                   <h4>{item.strMeal} </h4>
                    </Link>
                    
                    
                </li>
            ))}
        </ul>
        </>
    )
}

export default Recipes