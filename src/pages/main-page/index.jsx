import { useEffect, useReducer } from "react";
import HeroFilm from "../../components/hero-film";
import { useDispatch, useSelector } from "react-redux";
import { getFilms, getGenres } from "../../redux/actions/movieActions";
import MovieGenre from "../../components/movie-genre";

export default function MainPage () {
    const dispatch = useDispatch();
    const genreState = useSelector((state)=> state.movieReducer.genres)

    useEffect(()=>{
        //POPULER FILMS
        dispatch(getFilms())
        // genres
        dispatch(getGenres())
    }, [])
    return (
        <div className="bg-dark text-light">
            <HeroFilm />
            {
                genreState.slice(0-5).map((genre,i)=>(
                    <MovieGenre key={i}
                    title= {genre.name}
                    fetchUrl = {`/discover/movie?with_genres=${genre.id}`} />
                ))
            }
            
        </div>
    )
}