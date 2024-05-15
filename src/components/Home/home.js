import { useEffect,useState } from "react";
import MovieList from '../MovieList/movieList.js'

function Home(){
    const [netflixMovies,setNetflixMovies]=useState([])
    const sendReq = async () => {
        const serverURL = `http://localhost:3000/trending`
        const res =await fetch(serverURL);
        const jsonRes =await res.json();
        setNetflixMovies(jsonRes);
    }

    useEffect(()=>{
        sendReq();
    },[])
    return (
        <>
        
        <MovieList netflixMovies={netflixMovies} />
        </>
    )
}
export default Home;