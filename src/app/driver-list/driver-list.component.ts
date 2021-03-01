import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from '../driver';
import { Role } from '../role';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {

  drivers:Driver[] = [];
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
          this.permission=this.userConnexion.fnConducteur;
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
    this.userService.getConducteurList().subscribe(data => {
      this.drivers=data;
    });

  }

  permissionUpdateConducteur():boolean{

    if(this.permission[1]=="0")
      return false;

    return true;

  }

  updateDriver(id:number):void{
    this.router.navigate(['driver-update',id]);
  }

  permissionDeleteConducteur():boolean{

    if(this.permission[2]=="0")
      return false;

    return true;

  }

  deleteDriver(id:number):void{

  }

  deconnexion():void{

  }

}
