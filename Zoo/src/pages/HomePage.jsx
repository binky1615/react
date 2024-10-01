import AnimalCard from "../components/AnimalCard.jsx";
import animals from "../animals.js"
import "../App.css"

const HomePage = () => {
    return ( 
        <section>
            <h1>animals</h1>
            <div className="animalList">
                {animals.map((animal) => (
                    <AnimalCard key={animal.id} animal={animal} />
                ))}
            </div>
        </section>

     );
}
 
export default HomePage;