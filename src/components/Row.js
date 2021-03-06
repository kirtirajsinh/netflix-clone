import React, {useState , useEffect} from 'react'
import axios from "../axios.js"
import "./row.css"

const base_url = "https://image.tmdb.org/t/p/original"
function Row({title , fetchUrl , isLargeRow}) {
    const [movies , setMovies] = useState([]);

    useEffect(() => {

        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData()

    }, [fetchUrl]);
    
    return (
        <div className="row_cover">
            <h2>{title}</h2>
            <div className="row"> 
            {movies.map(movie =>(
               <img className={`poster_row && ${isLargeRow && "Large_poster"}`} src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`} key={movie.id} alt={movie.title}></img>
           ))}
            </div>
          
        </div>
    )
}

export default Row
