import React from 'react'

function IngredientLists({ingredients, getArecipe, items}) {
  return (
    <section>
    <h2>Ingredients on hand:</h2>
  {ingredients.length > 0 &&  
    <ul className="ingredientList">{items}</ul>}
     
   {ingredients.length  == 4 && <div className="get-recipe">
          <div>
           <h3>Ready for a recipe</h3>
           <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={getArecipe}>Get a recipe</button>
    </div>
  }
  </section>
  )
}

export default IngredientLists