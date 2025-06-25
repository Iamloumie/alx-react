import { Map } from 'immutable';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';
import notificationReducer from '../reducers/notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';

describe('notification selectors', () => {
  // Sample data to be used in the tests
  const notificationsData = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', value: 'New data available' },
  ];

  // Use the reducer to create a state that mimics the Redux store's state
  const action = {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data: notificationsData,
  };

  // Create an initial state with all notifications marked as unread
  let initialState = notificationReducer(undefined, action);

  // Create a modified state where one notification is marked as read
  let stateWithOneRead = initialState.setIn(['notifications', '2', 'isRead'], true);


  it('filterTypeSelected should return the filter value', () => {
    // The initial filter is 'DEFAULT'
    const filter = filterTypeSelected(initialState);
    expect(filter).toEqual('DEFAULT');
  });

  it('getNotifications should return the map of notifications', () => {
    const notifications = getNotifications(initialState);
    // We expect the selector to return the 'notifications' part of the state
    const expectedNotifications = initialState.get('notifications');
    expect(notifications).toEqual(expectedNotifications);
  });

  it('getUnreadNotifications should return only unread notifications', () => {
    const unreadNotifications = getUnreadNotifications(stateWithOneRead);

    // We expect only notifications with id 1 and 3 to be returned
    const expectedUnread = {
      '1': { id: 1, type: 'default', value: 'New course available', isRead: false },
      '3': { id: 3, type: 'urgent', value: 'New data available', isRead: false },
    };

    // Convert the returned immutable map to a JS object for comparison
    expect(unreadNotifications.toJS()).toEqual(expectedUnread);
  });
});
