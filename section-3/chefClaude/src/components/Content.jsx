import { useState } from "react";

function Content() {
  const [ingredients, setIngredients] = useState([])

  const items = ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)

  const addIngredients = (formData) =>{
      const newIngredient = formData.get('ingredient')
      setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }
  return (
    <main className='main-cont'>
        <form action={addIngredients}>
            <input type="text" name="ingredient" id="input" placeholder='e.g.oregano'/>
            <button className="add" type='submit' >
              Add ingredient
            </button>
        </form>
       <section>
          <h2>Ingredients on hand:</h2>
        {ingredients.length > 0 &&  
          <ul className="ingredientList">
            <li>{items}</li>
          <div className="get-recipe">
                <div>
                 <h3>Ready for a recipe</h3>
                 <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button>Get a recipe</button>
          </div>
          </ul>
        }
       </section>

    </main >
  )
}

export default Content