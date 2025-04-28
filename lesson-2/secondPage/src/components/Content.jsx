import { data } from "../Data";
import Contact from "./Contact";
import Jokes from "./Jokes";

function Content() {
  const places = data.map((place) => (
    <li key={place.id}>
      <div className="all">
          <div className="photo">
            <img 
            src={place.imageUrl}
            alt={place.placeName}
            />
          </div>
          <div className="info">
            <p className="country">📍{place.country} <span><a href="">view it on Google maps</a></span></p>
            <h1>{place.placeName}</h1>
            <p className="date">{place.date}</p>
            <p className="desc">{place.description}</p>      
          </div>
      </div>
    </li>
      
  ))
  

return(
  <main className="content">
      <ul>
        {places}
      </ul>
      <Contact />
      <Jokes
        setup=" I got my daughter a fridge for her birthday."
        punchline=" I can't wait to see her face light up when she opens it."
      />
      
      <Jokes 
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy"
      />
      <Jokes 
        setup="How did the hacker escape the police?"
        punchline="How did the hacker escape the police?"
      />
      
  </main>
)
 
}

export default Content