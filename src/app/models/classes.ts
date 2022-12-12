import { Students } from './students';
export interface Classes{
    id:number;
    idCourse: number;
    idStudents: number[];
    inicio: Date;
    fin: Date;
    deleted: boolean;
    available: boolean;
}