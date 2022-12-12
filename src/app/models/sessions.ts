import { Users } from "./users";

export interface Sesion {
    sesionActiva: boolean;
    usuarioActivo?: Users;
}