import { Users } from "./users";

export interface UserState{
    loading: boolean;
    users: Users[];
}