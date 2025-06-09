import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    NotificationTypeFilters,
} from './notificationActionTypes';

import {
    markAsRead,
    setNotificationFilter,
} from './notificationActionCreators';

describe('Notification action creators', () => {
    it('markAsRead', () => {
        const data = {
            type: MARK_AS_READ,
            index: 1,
        };
        const result = markAsRead(1);
        expect(result).toEqual(data);
    });

    it('setNotificationFilter', () => {
        const data = {
            type: SET_TYPE_FILTER,
            filter: DEFAULT,
        };
        const result = setNotificationFilter(NotificationTypeFilters.DEFAULT);
        expect(result).toEqual(data);
    });
});