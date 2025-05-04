import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientLists from "./IngredientLists";
import { getRecipeFromMistral } from "../ai";

function Content() {
  const [ingredients, setIngredients] = useState([])
  const [recipe, setRecipe] = useState("")

  const items = ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)

  const addIngredients = (formData) =>{
      const newIngredient = formData.get('ingredient')
      setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }

  const getArecipe = async () => {
    const generatedRecipe = await getRecipeFromMistral(ingredients)
    setRecipe(generatedRecipe)
  }
  return (
    <main className='main-cont'>
        <form action={addIngredients}>
            <input type="text" name="ingredient" id="input" placeholder='e.g.oregano'/>
            <button className="add" type='submit' >
              Add ingredient
            </button>
        </form>
     
       <IngredientLists 
        getArecipe={getArecipe}
        items={items}
        ingredients={ingredients}
       />
       {recipe && <ClaudeRecipe recipe={recipe}/>}
    </main >
  )
}

export default Content