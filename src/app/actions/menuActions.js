import {ActionTypes} from '../constants/action-types';

export const setMenus = (menus) => {
    return {
        type: ActionTypes.SET_MENUS,
        payload: menus,
    }
}

export const getBookings = (bookings) => {
    return {
        type: ActionTypes.GET_BOOKINGS,
        payload: bookings,
    }
}

export const selectedMenu = (menu) => {
    return {
        type: ActionTypes.SELECTED_MENU,
        payload: menu,
    }
}

export const removeSelectedMenu = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_MENU,
    }
}