import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    films: [],
    genres: [],
    loading: "false"
}

export const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_FILMS:
            return {
                ...state,
                films: payload,
            };

        case ActionTypes.GET_GENRES:
            return {
                ...state,
                genres: payload
            }
        default:
            return state

    }

}