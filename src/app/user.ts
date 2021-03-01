import { Company } from './company';
import { Role } from './role';

export class User {
    id!: number;
    firstName!: string;
    lastName!: string;
    cin!: string;
    emailId!: string;
    password!: string;
    address!: string;
    ville!: string;
    codePostal!: string;
    company!: Company;
    role!: Role;
    fnCarburant!: string;
    fnVehicule!: string;
    fnConducteur!: string;
}
