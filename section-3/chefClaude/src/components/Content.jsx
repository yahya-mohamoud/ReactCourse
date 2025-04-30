import { useState } from "react";

function Content() {
  const [ingredients, setIngredients] = useState([
    'Chicken',
    'Oregano',
    "Tomatoes"
  ])

  const items = ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)

  const handleSubmit = (event) =>{
      event.preventDefault();
      console.log("submitted");
      const formData = new FormData(event.currentTarget)
      const newIngredient = formData.get('ingredient')
      setIngredients(prevIngredients => [...prevIngredients, newIngredient])
      console.log(ingredients);
      
  }
  return (
    <main className='main-cont'>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="ingredient" id="input" placeholder='e.g.oregano'/>
            <button type='submit' >
              Add ingredient
            </button>
        </form>
        <ul>
          {items}
        </ul>
    </main >
  )
}

export default Content