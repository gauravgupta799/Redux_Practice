// import {addToCart} from "../Actions/Actions";
import {ADDTOCART} from "../constants";

const initialState = {
    cardDate: []
}

export const CardItem = (state= initialState,action) => {
    switch (action.type) {
        case ADDTOCART:
            return{
                ...state,
                cardData: action.data
            }
        default:
            return {
                ...state
            }    
    }
}

