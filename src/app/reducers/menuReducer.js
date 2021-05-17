import { ActionTypes } from "../constants/action-types";

const initialState = {
    menus: [],
    menuItem: []
}

export const menuReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_MENUS:
            return {...state, menus: payload};
        case ActionTypes.SELECTED_MENU:
            return {...state, menuItem: payload}
        default:
            return state;
    }
}