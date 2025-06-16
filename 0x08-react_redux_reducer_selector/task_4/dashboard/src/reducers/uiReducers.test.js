import { toJS } from 'immutable';
import uiReducer, { initialState } from './uiReducers';
import {
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer', function() {
    it('initial state should be correct', function() {
        const state = uiReducer(undefined, {});
        expect(state.toJS()).toEqual(initialState);
    }
    );

    it('SELECT_COURSE should return the initial state', function() {
        const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
        expect(state.toJS()).toEqual(initialState);
    }
    );

    it('DISPLAY_NOTIFICATION_DRAWER should set isNotificationDrawerVisible to true', function() {
        const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
        expect(state.toJS()).toEqual({
            ...initialState,
            isNotificationDrawerVisible: true,
        });
    });
})