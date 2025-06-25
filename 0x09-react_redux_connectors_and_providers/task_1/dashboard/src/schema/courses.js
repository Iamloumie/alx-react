import { normalize, schema } from 'normalizr';

const courses = new schema.Entity('courses');
const courseNormalizer = (data) => {
    const normalizedData = normalize(data, [courses]);
    return normalizedData.entities.courses || {};
};

export default courseNormalizer;