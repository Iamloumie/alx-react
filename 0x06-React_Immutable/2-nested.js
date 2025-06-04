import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
    const mappedobj = fromJS(object);

    return mappedobj.getIn(array, undefined);
}