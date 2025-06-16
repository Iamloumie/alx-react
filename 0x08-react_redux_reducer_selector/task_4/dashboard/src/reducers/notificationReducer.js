import { Map } from "immutable";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";

export const initialnotificationState = Map({
  notifications: [],
  filter: "DEFAULT",
});

const notificationReducer = (state = initialnotificationState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      // Normalize the data recieved from the action
      const normalizedData = notificationsNormalizer(action.data);

      // Add 'isRead' property to each notification
      Object.keys(normalizedData.entities.notifications).forEach((key) => {
        normalizedData.entities.notifications[key].isRead = false;
      })

      // Update the state with normalized notifications
      return state.mergeDeep(normalizedData.entities);

    case MARK_AS_READ:
      return state.setIn(
        ["notifications", string(action.index), "isRead"],
        true
      );

    case SET_TYPE_FILTER:
      return
        state.set("filter", action.filter);

    default:
      return state;
  }
};

export default notificationReducer;

