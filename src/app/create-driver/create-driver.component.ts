import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from '../driver';
import { Role } from '../role';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-driver',
  templateUrl: './create-driver.component.html',
  styleUrls: ['./create-driver.component.css']
})
export class CreateDriverComponent implements OnInit {

  driver:Driver=new Driver();
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
          if(this.permission[0]=="0"){
            alert("NOT EXIST");
          }
        }
      }
    });
  }

  saveConducteur(){
    this.userService.createConducteur(this.driver).subscribe(data => {
      console.log(data);
    },
    error => console.log(error))
  }

  onSubmit(){

    this.userService.getUserConnexion().subscribe(data => {  
      this.userConnexion=data;
      if(this.userConnexion!=null){
        this.roleConnexion=this.userConnexion.role;
        if(this.roleConnexion.id==3){
          this.permission=this.userConnexion.fnConducteur;
          if(this.permission[0]=="0"){
            alert("NOT EXIST");
          }
          else{
            this.saveConducteur();
          }
        }
        else{
          this.saveConducteur();
        }
      }
    });
    
  }

}
