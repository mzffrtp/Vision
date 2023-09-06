import HeroFilm from "../../components/hero-film";
import MovieList from "../../components/movie-list";

export default function MainPage () {
    return (
        <div className="bg-dark text-light">
            <h1>Main Page</h1>
            <HeroFilm />
            <MovieList />
        </div>
    )
}