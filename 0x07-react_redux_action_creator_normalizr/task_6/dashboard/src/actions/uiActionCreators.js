import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

export const login = (email, password) => ({
    type: LOGIN,
    user: {
        email,
        password,
    },
});

export const boundLogin = (email, password) => (dispatch) => {
    dispatch(login(email, password));
    return Promise.resolve();
}

export const logout = () => ({
    type: LOGOUT,
});

export const boundLogout = () => (dispatch) => {
    dispatch(logout());
    return Promise.resolve();
}

export const displayNotificationDrawer = () => ({
    type: DISPLAY_NOTIFICATION_DRAWER,
});

export const boundDisplayNotificationDrawer = () => (dispatch) => {
    dispatch(displayNotificationDrawer());
    return Promise.resolve();
}

export const hideNotificationDrawer = () => ({
    type: HIDE_NOTIFICATION_DRAWER,
});

export const boundHideNotificationDrawer = () => (dispatch) => {
    dispatch(hideNotificationDrawer());
    return Promise.resolve();
}
