import { useEffect, useState } from "react";
import MovieList from '../MovieList/movieList.js'

function Home() {

    const [netflixMovies, setNetflixMovies] = useState([]);
    
    useEffect(() => {
        const fetchNetflixMovies = async () => {
            try {
                const response = await fetch(`http://localhost:3000/trending`);
                const data = await response.json();
                setNetflixMovies(data);
            } catch (error) {
                console.error("Error fetching Netflix movies:", error);
            }
        };
        fetchNetflixMovies();
    }, []);

    return (
        <>
            <MovieList netflixMovies={netflixMovies} />
        </>
    );
}

export default Home;
