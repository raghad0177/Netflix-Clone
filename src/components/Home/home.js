import { useEffect, useState } from "react";
import MovieList from '../MovieList/movieList.js'


function Home() {

    const [netflixMovies, setNetflixMovies] = useState([]);
    
    useEffect(() => {
        const fetchNetflixMovies = async () => {
            try {
                const response = await fetch(`https://movies-library-l5nh.onrender.com/trending`);
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
