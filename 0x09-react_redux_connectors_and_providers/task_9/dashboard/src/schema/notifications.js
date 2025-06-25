import * as notificationsData from '../../notifications.json';
import { normalize, schema } from 'normalizr';




export const getAllNotificationsByUser = (userId) => {
    const notifications = normalized.entities.notifications;
    const messages = normalized.entities.messages;
    const notificationsByUser = [];

    for (const property in notifications) {
        if (notifications[property].author === userId) {
            notificationsByUser.push(messages[notifications[property].context]);
        }
    }
    return notificationsByUser;
};

// Define the author schema
const user = new schema.Entity('users')

const message = new schema.Entity(
    'messages',
    {},
    {
        idAttribute: 'guid'
    }
);

// Define the notification schema
const notification = new schema.Entity(
    'notifications',
    {
        author: user,
        context: message,
    }
);

const normalized = normalize(notificationsData.default, [notification]);

export const notificationsNormalizer = (data) => {
    return normalize(data, [notification]);
}

export { normalized };