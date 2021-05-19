import React , {useState , useEffect} from 'react'
import axios from "../axios"
import requests from "../requests"
import "./banner.css"

function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOrigionals)
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request
        }
            fetchData();
    }, [])
    return (
        <header className="banner" style={{
            backgroundSize:"cover",
            backgroundPosition:"center center",
            backgroundImage:`url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`
        }}>
            <div className="banner_content">
                <h1 className="title">
                    {movie?.title || movie?.name ||movie?.original_name }
                </h1>
                <div className="banner_buttons" >
                        <button className="">Play</button>
                        <button className="">My List</button>
                </div>
                <h1 className="banner_description">Hey</h1>
            </div>
            
            
        </header>
    )
}

export default Banner
