import { data } from "../Data";
import Contact from "./Contact";

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
  </main>
)
 
}

export default Content