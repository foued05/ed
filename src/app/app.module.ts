import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import {FormsModule} from '@angular/forms';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { LoginComponent } from './components/login/login.component';
import { CreateCarburantComponent } from './create-carburant/create-carburant.component';
import { CarburantListComponent } from './carburant-list/carburant-list.component';
import { CreateVehiculeComponent } from './create-vehicule/create-vehicule.component';
import { VehiculeListComponent } from './vehicule-list/vehicule-list.component';
import { CreateDriverComponent } from './create-driver/create-driver.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { DriverUpdateComponent } from './driver-update/driver-update.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CreateUserComponent,
    UpdateUserComponent,
    LoginComponent,
    CreateCarburantComponent,
    CarburantListComponent,
    CreateVehiculeComponent,
    VehiculeListComponent,
    CreateDriverComponent,
    DriverListComponent,
    DriverUpdateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
