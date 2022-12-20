import { Course } from "./courses";

export interface CourseState{
    loading: boolean;
    courses: Course[];
}