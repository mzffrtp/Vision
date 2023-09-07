import axios from "axios";
import { ActionTypes } from "../constants/actionTypes";
// data fetch settings

export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Mzg0YzRkNThlMWFkMDI2MDQzMjNhOTVhZjRkZjhjNiIsInN1YiI6IjY0ZjhlYTkzYTg0YTQ3MDEzYTQxOWM2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J8celuor-pZnAIC2O1vWaHKXW865U6jUqrzZiby-TLA'
    }
};

// Base URL definition
axios.defaults.baseURL = "https://api.themoviedb.org/3"

//fetching data
export const getFilms = () => (dispatch) => {
    axios
        .get("/movie/popular", options)
        .then((res) => (dispatch({
            type: ActionTypes.GET_FILMS,
            payload: res.data.results,
        })))
}

/* THUNK coding alternative

function exampleThunk () {
    return async function (dispatch) {
        ......
        dispatch();
    };
}

function exThunk2 = () => async (dispatch) => {
    ...
    dispatch()
}

*/