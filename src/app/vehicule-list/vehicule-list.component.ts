import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../role';
import { User } from '../user';
import { UserService } from '../user.service';
import { Vehicle } from '../vehicule';

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.css']
})
export class VehiculeListComponent implements OnInit {

  vehicules:Vehicle[]= [];
  userConnexion:User=new User();
  roleConnexion:Role=new Role();
  permission="";

  constructor(private userService : UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.getUserConnexion().subscribe(data => {  
      this.userConnexion=data;
      if(this.userConnexion!=null){
        this.roleConnexion=this.userConnexion.role;
        if(this.roleConnexion.id==3){
          this.permission=this.userConnexion.fnVehicule;
          if(this.permission[3]=="0"){
            alert("NOT EXIST");
          }
          else{
            this.getVehicule();
          }
        }
        else
          this.getVehicule();
      }
    });
  }

  getVehicule(){
    this.userService.getVehiculeList().subscribe(data => {
      this.vehicules=data;
    });

  }

  permissionUpdateVehicule():boolean{

    if(this.permission[1]=="0")
      return false;

    return true;

  }

  updateVehicule(id:number):void{

  }

  permissionDeleteVehicule():boolean{

    if(this.permission[2]=="0")
      return false;

    return true;

  }

  deleteVehicule(id:number):void{
    this.userService.deleteVehicule(id).subscribe(data =>{
      this.getVehicule();
    })
  }

  deconnexion():void{

  }

}
