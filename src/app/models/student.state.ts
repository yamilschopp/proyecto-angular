import { Students } from "./students";

export interface StudentState{
    loading: boolean;
    students: Students[];
}