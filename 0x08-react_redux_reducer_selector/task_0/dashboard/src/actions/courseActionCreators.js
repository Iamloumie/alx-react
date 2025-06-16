import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

// Action creator for selecting a course
// This function creates an action to select a course by its index
// It returns an object with the type of action and the index of the course
export const boundSelectCourse = (index) => {
  return (dispatch) => {
    dispatch(selectCourse(index));
  };
};

export const unselectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});

// Action creator for unselecting a course
// This function creates an action to unselect a course by its index
// It returns an object with the type of action and the index of the course
export const boundUnselectCourse = (index) => {
  return (dispatch) => {
    dispatch(unselectCourse(index));
  };
};
