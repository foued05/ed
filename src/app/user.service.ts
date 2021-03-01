import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable,throwError } from 'rxjs';
import {catchError,retry} from'rxjs/operators';
import { User } from './user';
import { Role } from './role';
import { Company } from './company';
import { UserAdmin } from './userAdmin';
import { Fuel } from './carburant';
import { Vehicle } from './vehicule';
import { Driver } from './driver';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 




  constructor(private httpClient: HttpClient) { }

  loginUser(user:User): Observable<User>{
    return this.httpClient.get<User>(`${"http://localhost:8080/api/login"}/${user.emailId}/${user.password}`);
  } 
  
  logoutUser(): Observable<User>{
    return this.httpClient.get<User>(`${"http://localhost:8080/api/logout"}`);
  } 
  
  getUserList(): Observable<User[]>{
      return this.httpClient.get<User[]>(`${"http://localhost:8080/api/get "}`)
  }

  getUserAdminList(): Observable<UserAdmin[]>{
    return this.httpClient.get<UserAdmin[]>(`${"http://localhost:8080/api/getAdmin "}`)
  }

  getUserConnexion(): Observable<User>{
      return this.httpClient.get<User>(`${"http://localhost:8080/api/getUserConnexion "}`)
    }

  getRoleList(): Observable<Role[]>{
      return this.httpClient.get<Role[]>(`${"http://localhost:8080/api/getRole"}`)
  }

  getCompanyList(): Observable<Company[]>{
    return this.httpClient.get<Company[]>(`${"http://localhost:8080/api/getCompany "}`)
  }

  getCarburantList(): Observable<Fuel[]>{
    return this.httpClient.get<Fuel[]>(`${"http://localhost:8080/api/getCarburant "}`)
  }

  getVehiculeList(): Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(`${"http://localhost:8080/api/getVehicule "}`)
  }

  getConducteurList(): Observable<Driver[]>{
    return this.httpClient.get<Driver[]>(`${"http://localhost:8080/api/getDriver "}`)
  }
  
  createUser(user : User):Observable<Object>{
    return this.httpClient.post(`${"http://localhost:8080/api/create "}`,user);
  }

  createCarburant(carburant : Fuel):Observable<Object>{
    return this.httpClient.post(`${"http://localhost:8080/api/createCarburant "}`,carburant);
  }

  createVehicule(vehicule : Vehicle):Observable<Object>{
    return this.httpClient.post(`${"http://localhost:8080/api/createVehicule "}`,vehicule);
  }

  createConducteur(driver : Driver):Observable<Object>{
    return this.httpClient.post(`${"http://localhost:8080/api/createDriver "}`,driver);
  }

  createUserAdmin(user : UserAdmin):Observable<Object>{
    return this.httpClient.post(`${"http://localhost:8080/api/create "}`,user);
  }

  getUserById(id:number): Observable<User>{
    return this.httpClient.get<User>(`${"http://localhost:8080/api/user"}/${id}`);
    
  }

  getDriverById(id:number): Observable<Driver>{
    return this.httpClient.get<Driver>(`${"http://localhost:8080/api/driver"}/${id}`);
    
  }

  updateUser(id: number, user:User):Observable<Object>{
    return this.httpClient.put(`${"http://localhost:8080/api/update"}/${id}`,user);
  }

  updateDriver(id: number, driver:Driver):Observable<Object>{
    return this.httpClient.put(`${"http://localhost:8080/api/updateDriver"}/${id}`,driver);
  }

  deleteUser(id:number):Observable<Object>{
    return this.httpClient.delete(`${"http://localhost:8080/api/delete"}/${id}`);
  }

  deleteVehicule(id:number):Observable<Object>{
    return this.httpClient.delete(`${"http://localhost:8080/api/deleteVehicule"}/${id}`);
  }
}
