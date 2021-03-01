import { Role } from './role';

export class UserAdmin {
    id!: number;
    firstName!: string;
    lastName!: string;
    cin!: string;
    emailId!: string;
    password!: string;
    address!: string;
    ville!: string;
    codePostal!: string;
    role!: Role;
}