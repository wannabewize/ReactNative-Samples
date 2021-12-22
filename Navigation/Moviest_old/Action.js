export const ADD_FAVORITE = "add_favorite"
export const REMOVE_FAVORITE = "remove_favorite"

export const addFavorite = (movie) => {
    return {
        type: ADD_FAVORITE,
        payload: movie
    }
}

export const removeFavorite = (movieId) => {
    return {
        type: REMOVE_FAVORITE,
        payload: movieId
    }
}