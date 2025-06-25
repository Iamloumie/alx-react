import { Map } from 'immutable';
import notificationReducer, { initialNotificationState } from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

describe('notificationReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const state = notificationReducer(undefined, {});
    // Use .toJS() to compare the Immutable Map with a plain JS object
    expect(state.toJS()).toEqual(initialNotificationState.toJS());
  });

  it('FETCH_NOTIFICATIONS_SUCCESS should normalize and merge the data correctly', () => {
    const notificationsData = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New data available' },
    ];

    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: notificationsData,
    };

    // This is what we expect the state to look like after the reducer runs
    const expectedState = {
      filter: 'DEFAULT',
      notifications: {
        '1': { id: 1, type: 'default', value: 'New course available', isRead: false },
        '2': { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        '3': { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      },
    };

    const state = notificationReducer(undefined, action);
    expect(state.toJS()).toEqual(expectedState);
  });

  it('MARK_AS_READ should update the isRead property of the correct notification', () => {
    // Setup an initial state with some notifications
    const initialStateWithData = Map({
      filter: 'DEFAULT',
      notifications: {
        '1': { id: 1, type: 'default', value: 'New course available', isRead: false },
        '2': { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        '3': { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      },
    });

    const action = {
      type: MARK_AS_READ,
      index: 2, // The ID of the notification to mark as read
    };

    // The expected state after marking notification '2' as read
    const expectedState = {
      filter: 'DEFAULT',
      notifications: {
        '1': { id: 1, type: 'default', value: 'New course available', isRead: false },
        '2': { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
        '3': { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      },
    };

    const state = notificationReducer(initialStateWithData, action);
    expect(state.toJS()).toEqual(expectedState);
  });

  it('SET_TYPE_FILTER should update the filter property', () => {
    // Setup an initial state
    const initialStateWithData = Map({
      filter: 'DEFAULT',
      notifications: {
        '1': { id: 1, type: 'default', value: 'New course available', isRead: false },
      },
    });

    const action = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT',
    };

    // The expected state after changing the filter
    const expectedState = {
      filter: 'URGENT',
      notifications: {
        '1': { id: 1, type: 'default', value: 'New course available', isRead: false },
      },
    };

    const state = notificationReducer(initialStateWithData, action);
    expect(state.toJS()).toEqual(expectedState);
  });
});
