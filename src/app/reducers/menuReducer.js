import { ActionTypes } from "../constants/action-types";

const initialState = {
    menus: [{
        id:1,
        title: 'Mega Fillet Burger',
        category: 'Lunch',
        price: '3.49',
    }]
}

export const menuReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_MENUS:
            return state;
        default:
            return state;
    }
}