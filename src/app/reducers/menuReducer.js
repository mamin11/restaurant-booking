import { ActionTypes } from "../constants/action-types";

const initialState = {
    menus: [],
    menuItem: [],
    bookings: []
}

export const menuReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_MENUS:
            return {...state, menus: payload};
        case ActionTypes.GET_BOOKINGS:
            return {...state, bookings: payload};
        case ActionTypes.SELECTED_MENU:
            return {...state, menuItem: payload}
        case ActionTypes.REMOVE_SELECTED_MENU:
            return {}
        default:
            return state;
    }
}