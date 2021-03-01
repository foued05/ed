import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../role';
import { User } from '../user';
import { UserService } from '../user.service';
import { Vehicle } from '../vehicule';

@Component({
  selector: 'app-create-vehicule',
  templateUrl: './create-vehicule.component.html',
  styleUrls: ['./create-vehicule.component.css']
})
export class CreateVehiculeComponent implements OnInit {

  vehicule:Vehicle=new Vehicle();
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
          if(this.permission[0]=="0"){
            alert("NOT EXIST");
          }
        }
      }
    });
  }

  saveVehicule(){
    this.userService.createVehicule(this.vehicule).subscribe(data => {
      console.log(data);
    },
    error => console.log(error))
  }

  onSubmit():void{

    this.userService.getUserConnexion().subscribe(data => {  
      this.userConnexion=data;
      if(this.userConnexion!=null){
        this.roleConnexion=this.userConnexion.role;
        if(this.roleConnexion.id==3){
          this.permission=this.userConnexion.fnVehicule;
          if(this.permission[0]=="0"){
            alert("NOT EXIST");
          }
          else{
            this.saveVehicule();
          }
        }
        else{
          this.saveVehicule();
        }
      }
    });
    
  }

}
