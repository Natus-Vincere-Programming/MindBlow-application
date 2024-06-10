export interface UsersResponse {
    users: User[];
    hasNext: boolean;
}

export interface User {
    email: string;
    firstName: string;
    lastName: string;
    role: string;
}