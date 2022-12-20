export interface Datos{
    id:number;
    idCourse: number;
    idStudents: number[];
    inicio: Date;
    fin: Date;
    deleted: boolean;
    available: boolean;
    nombre: string;
    profesor: string;
    img: string;
}