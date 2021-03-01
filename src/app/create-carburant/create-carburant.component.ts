import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fuel } from '../carburant';
import { Role } from '../role';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-carburant',
  templateUrl: './create-carburant.component.html',
  styleUrls: ['./create-carburant.component.css']
})
export class CreateCarburantComponent implements OnInit {

  carburant : Fuel= new Fuel();
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
          if(this.permission[0]=="0"){
            alert("NOT EXIST");
          }
        }
      }
    });
  }

  saveCarburant(){
    this.userService.createCarburant(this.carburant).subscribe(data => {
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
          this.permission=this.userConnexion.fnCarburant;
          if(this.permission[0]=="0"){
            alert("NOT EXIST");
          }
          else{
            this.saveCarburant();
          }
        }
        else{
          this.saveCarburant();
        }
      }
    });
    
  }

}
