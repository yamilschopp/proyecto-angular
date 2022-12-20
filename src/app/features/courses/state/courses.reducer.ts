import { Action, createReducer, on } from '@ngrx/store';
import { CourseState } from 'src/app/models/course.state';
import * as CoursesActions from './courses.actions';

export const coursesFeatureKey = 'courses';

export const courseState: CourseState = {
  loading: false,
  courses: []
};

export const reducerCourse = createReducer(
  courseState,

  on(CoursesActions.loadCourses, (state) => {
    return {...state, loading: true }
  }),
  on(CoursesActions.loadCoursesSuccess, (state, {courses}) => {
    return {...state, loading: false, courses}
}),
  on(CoursesActions.loadCoursesFailure, (state, {error}) => {
    return state
  }),
  on(CoursesActions.addCourse, (state, {course}) => {
    return state
  }),
  on(CoursesActions.editCourse, (state, {course}) => {
    return state
  }),
  on(CoursesActions.deleteCourse, (state, {id}) => {
    return state
  }),
);
