import * as notificationsData from '../../notifications.json';
import { normalize, schema } from 'normalizr';

export const getAllNotificationsByUser = (userId) => {
    return notificationsData.default
        .filter((item) => item.author.id === userId)
        .map(({ context }) => context);
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

export { normalized };