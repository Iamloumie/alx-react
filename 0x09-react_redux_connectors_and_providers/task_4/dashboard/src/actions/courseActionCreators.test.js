import { selectCourse, unselectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe("selectCourse action creator", () => {
    it('selectCourse', () => {
        const result = selectCourse(1);
        expect(result).toEqual({
            type: SELECT_COURSE,
            index: 1,
        });
    });

    it('unselectCourse', () => {
        const result = unselectCourse(1);
        expect(result).toEqual({
            type: UNSELECT_COURSE,
            index: 1,
        });
    });
});