import { ActionReducerMap } from "@ngrx/store";
import { CourseState } from "../models/course.state";

import { ClassState } from '../models/class.state';
import { StudentState } from "../models/student.state";
import { UserState } from "../models/user.state";
import { reducerCourse } from "../features/courses/state/courses.reducer";
import { reducerClass } from '../features/classes/state/classes.reducer';
import { reducerStudent } from "../features/students/state/students.reducer";
import { reducerUser } from "../features/users/state/user.reducer";


export interface AppState{
    cursos: CourseState,
    estudiantes: StudentState,
    usuarios: UserState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    cursos: reducerCourse,
    estudiantes: reducerStudent,
    usuarios: reducerUser
}