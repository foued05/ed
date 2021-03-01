import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from './components/user-list/user-list.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { from } from 'rxjs';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { LoginComponent } from './components/login/login.component';
import { CreateCarburantComponent } from './create-carburant/create-carburant.component';
import { CarburantListComponent } from './carburant-list/carburant-list.component';
import { CreateVehiculeComponent } from './create-vehicule/create-vehicule.component';
import { VehiculeListComponent } from './vehicule-list/vehicule-list.component';
import { CreateDriverComponent } from './create-driver/create-driver.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { AppComponent } from './app.component';
import { DriverUpdateComponent } from './driver-update/driver-update.component';

const routes: Routes = [
  {path: 'login',component:LoginComponent },
  {path: 'users', component: UserListComponent},
  {path: 'create-user',component:CreateUserComponent},
  {path: 'update-user/:id',component:UpdateUserComponent },
  {path: 'create-carburant',component:CreateCarburantComponent },
  {path: 'carburant-list',component:CarburantListComponent },
  {path: 'create-vehicule',component:CreateVehiculeComponent },
  {path: 'vehicule-list',component:VehiculeListComponent },
  {path: 'create-driver',component:CreateDriverComponent },
  {path: 'list-driver',component:DriverListComponent },
  {path: 'main',component:AppComponent },
  {path: 'driver-update/:id',component:DriverUpdateComponent },
  

  {path:'', redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
