// import {addToCart} from "../Actions/Actions";
import {ADD_TO_CART} from "../constants";

// const initialState = {
//     cardData: []
// }

export const CardItems = (state= [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log("reducer", action.data)
            return [
                ...state,
                {cardData: action.data }
            ]
        default:
            return state 
    }
}

