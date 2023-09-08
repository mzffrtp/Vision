import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { options } from "../../redux/actions/movieActions"
import { baseImgUrl } from "../../components/hero-film"

export default function MovieDetails () {
    const {movieId} = useParams()
    const [movieDetail, setMovieDetail] = useState()
    useEffect(()=> {
        axios
            .get(`movie/${movieId}`, options)
            .then((res)=> setMovieDetail(res.data))
    }, [])

    if (!movieDetail) return "Loading ..."
    return (
        <div className="bg-dark text-light movie-details p-1">
            <div className="d-flex justify-content-center">
                <img
                className="w-50" 
                src={`${baseImgUrl}${movieDetail.poster_path}`} />
            </div>
            <div>
                <h1>{movieDetail.title}</h1>
                <p>{movieDetail.overview}</p>
                <div className="row row-cols-2">
                    <div>
                        <p>Budget:{movieDetail.budget}</p>
                        <p>Revenue:{movieDetail.revenue}</p>
                    </div>
                    <div>
                        <div>
                            Languages:
                            {
                                movieDetail.spoken_languages.map((lang,i)=> (
                                    <p key={i} className="badge">{lang.name}</p>
                                ))
                            }
                        </div>
                        <div>
                            Category:
                            {
                                movieDetail.genres.map((genre,i)=> (
                                    <p key={i} className="badge">{genre.name}</p>
                                ))
                            }
                        </div>
                        <div>
                            Production Compnay:
                            {
                                movieDetail.production_companies.map((comp,i)=> (
                                    <p key={i} className="badge">{comp.name}</p>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}