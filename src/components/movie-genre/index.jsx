import axios from "axios"
import { useEffect, useState } from "react"
import { options } from "../../redux/actions/movieActions"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import { baseImgUrl } from "../hero-film";
import { Link } from "react-router-dom";

export default function MovieGenre ({title, fetchUrl}) {
    const [moviesInGenres, setMoviesInGenres] = useState([])

    useEffect(()=> {
        axios
            .get(fetchUrl, options)
            .then((res)=> setMoviesInGenres(res.data.results))
    }, [])

    return (
        <div className="bg-dark text-light p-4">
            <h1>{title}</h1>
            <Splide options={{
                autoWidth:true,
                gap:10,
                pagination: false
            }}>
                {
                    moviesInGenres?.map((movie, i)=> (
                        <SplideSlide key={i}>
                            <Link to={`/movie/${movie.id}`}>
                            <img className="moviesInGenre" src={`${baseImgUrl}${movie.backdrop_path}`}/>
                            </Link>
                        </SplideSlide>
                    ))
                }
            </Splide>
        </div>
    )
}