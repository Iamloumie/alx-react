import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

export const markAsRead = (index) => {
  return {
    type: MARK_AS_READ,
    index,
  };
}

// Action creator for marking a notification as read
// This function creates an action to mark a notification as read by its index
// It returns an object with the type of action and the index of the notification
export const boundMarkAsRead = (index) => {
  return (dispatch) => {
    dispatch(markAsRead(index));
  };
};


export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
};
// Action creator for setting the notification filter
// This function creates an action to set the type filter for notifications
// It returns an object with the type of action and the filter to be applied
export const boundSetNotificationFilter = (filter) => {
  return (dispatch) => {
    dispatch(setNotificationFilter(filter));
  };
};