import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fuel } from '../carburant';
import { Role } from '../role';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-carburant-list',
  templateUrl: './carburant-list.component.html',
  styleUrls: ['./carburant-list.component.css']
})
export class CarburantListComponent implements OnInit {

  carburants:Fuel[]= [];
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
          this.permission=this.userConnexion.fnCarburant;
          if(this.permission[3]=="0"){
            alert("NOT EXIST");
          }
          else{
            this.getCarburant();
          }
        }
        else
          this.getCarburant();
      }
    });
  }

  getCarburant(){
    this.userService.getCarburantList().subscribe(data => {
      this.carburants=data;
    });

  }

  permissionUpdateCarburant():boolean{

    if(this.permission[1]=="0")
      return false;

    return true;

  }

  updateCarburant(id:number):void{

  }

  permissionDeleteCarburant():boolean{

    if(this.permission[2]=="0")
      return false;

    return true;

  }
  
  deleteCarburant(id:number):void{

  }

  deconnexion():void{

  }

}
