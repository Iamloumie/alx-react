import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from '../actions/uiActionTypes';

export const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
}

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return {
                ...state,
                isNotificationDrawerVisible: true,
            };
        
        case HIDE_NOTIFICATION_DRAWER:
            return {
                ...state,
                isNotificationDrawerVisible: false,
            };
        
        case LOGIN_SUCCESS:
            return {
                ...state,
                isUserLoggedIn: true,
                user: action.user,
            };
        
        case LOGIN_FAILURE:
            return {
                ...state,
                isUserLoggedIn: false,
                user: {},
            };
        
        case LOGOUT:
            return {
                ...state,
                isUserLoggedIn: false,
                user: {},
            };
        
        default:
            break;
    }
    return state;

};

export default uiReducer;