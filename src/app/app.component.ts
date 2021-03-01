import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from './role';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userConnexion:User=new User();
  roleConnexion:Role=new Role();
  title: any;
  
  constructor(private userService : UserService,private router:Router){
     
  }

  ngOnInit(): void {
    this.userService.getUserConnexion().subscribe(data => {  
      this.userConnexion=data;
      if(this.userConnexion!=null){
        this.roleConnexion=this.userConnexion.role;
        if(this.roleConnexion.id==1 || this.roleConnexion.id==2){
          this.router.navigate(['/users']);
        }
        else{
          this.router.navigate(['/create-carburant']);
        }
      }
      else{
        this.router.navigate(['/login']);
      }
    });
  }

  permissionEmployee():Boolean{
    
    if(this.roleConnexion.id==3){
      return false;
    }
    
    return true;
  }
    


}
