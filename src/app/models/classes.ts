import { Students } from './students';
export interface Classes {
  id: number;
  idCourse: number;
  idStudent: number[];
  inicio: Date;
  fin: Date;
  deleted: boolean;
  available: boolean;
}
