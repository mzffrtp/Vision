import { useSelector } from "react-redux"
export const baseImgUrl = "https://image.tmdb.org/t/p/original/"

export default function HeroFilm () {
    const movieState = useSelector((state)=>state.movieReducer)

const heroFilm = movieState.films[Math.round(Math.random()*19)]

    return (
        <div className="row bg-dark text-light p-4">
            <div className="col-md-6 gap-3 d-flex flex-column justify-content-center">
                <h1>{heroFilm?.title}</h1>
                <p className="text-warning">IMDB: {heroFilm?.vote_average}</p>
                <p>{heroFilm?.overview}</p>
                <div className="d-flex gap-3 justify-content-center mb-3">
                    <button className="btn btn-danger">Watch Now!</button>
                    <button className="btn btn-info">Add to List!</button>
                </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
                <img className="img-fluid rounded shadow" 
                src={`${baseImgUrl}${heroFilm?.backdrop_path}`} />
            </div>
        </div>
    )
}