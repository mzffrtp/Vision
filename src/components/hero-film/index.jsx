import { useSelector } from "react-redux"

export default function HeroFilm () {
    const movieState = useSelector((state)=>state.movieReducer)

const heroFilm = movieState.films[Math.round(Math.random()*19)]

console.log(heroFilm);
    return (
        <div className="row m-3">
            <div className="col-md-6 gap-3 d-flex flex-column justify-content-center">
                <h1>{heroFilm?.title}</h1>
                <p className="text-warning">IMDB: {heroFilm?.vote_average}</p>
                <p>{heroFilm?.overview}</p>
                <div className="d-flex gap-3 justify-content-center">
                    <button className="btn btn-danger">Watch Now!</button>
                    <button className="btn btn-info">Add to List!</button>
                </div>

            </div>
            <div className="col-md-6">b</div>
        </div>
    )
}