import { useEffect } from "react";
import HeroFilm from "../../components/hero-film";
import MovieList from "../../components/movie-list";
import { useDispatch } from "react-redux";
import { getFilms } from "../../redux/actions/movieActions";

export default function MainPage () {
    const dispatch = useDispatch();

    useEffect(()=>{
        //POPULER FILMS
        dispatch(getFilms())
    }, [])
    return (
        <div className="bg-dark text-light">
            <h1>Main Page</h1>
            <HeroFilm />
            <MovieList />
        </div>
    )
}