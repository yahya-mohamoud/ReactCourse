import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientLists from "./IngredientLists";

function Content() {
  const [ingredients, setIngredients] = useState([])
  const [isShown, setIShown] = useState(false)

  const items = ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)

  const addIngredients = (formData) =>{
      const newIngredient = formData.get('ingredient')
      setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }

  const handleClick = () => {
    setIShown((prev) => prev = !prev)
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
        handleClick={handleClick}
        items={items}
        ingredients={ingredients}
       />
       {isShown && <ClaudeRecipe />}
    </main >
  )
}

export default Content