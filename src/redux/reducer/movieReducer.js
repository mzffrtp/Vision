const initialState = {
    films: [],
    genres: [],
    loading: "false"
}

export const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "GET_MOVIES":
            return {
                ...state,
                films: payload,
            };
        default:
            return state

    }

}