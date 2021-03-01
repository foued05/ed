import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { User } from '../../user';
import { Role } from '../../role';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {


  user:User = new User();
  role:Role = new Role();
  
  constructor(private userService : UserService,
    private router: Router) {}

  

  foundUser(){
    this.userService.loginUser(this.user).subscribe(data => {
      if(data != null){
        this.user=data;
        this.role=this.user.role;
        alert("Salut "+this.user.firstName+" "+this.user.lastName+" : "+this.role.libelle);
        this.goToAppComponent()
        }
      else{
        alert("Email ou Password erroné");
      }
      
    },
    error => console.log(error));
  }

  goToAppComponent(){
    this.router.navigate(['/main']);
  }

  onSubmit(){
    this.foundUser();
  }

}
