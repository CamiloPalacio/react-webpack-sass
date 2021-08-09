import { useEffect, useState } from "react";

const Characters = ({}) => {

    //Estados
    const [character, setCharacter] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setCharacter(data.results))
    }, [])



    return ( 
        <div className="container">
            <div className="characters">
                {
                    character.map( ({id, image, name, species, status}) =>(
                        <div className="box" key={id}>
                            <img src={image} alt={name} />
                            <div className="character">
                                <h3 className="name">{name}</h3>
                                <p className="specie">{species}</p>
                                <p className="status">{status}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div> 
    );
}
 
export default Characters;