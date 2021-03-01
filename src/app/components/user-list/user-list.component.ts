import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { UserAdmin } from 'src/app/userAdmin';
import { Role } from 'src/app/role';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  usersModif: User[] = [];
  userConnexion:User=new User();
  usersAdmin:UserAdmin[] = [];


  carburantString="";
  vehiculeString="";
  conducteurString="";

  constructor(private userService: UserService,
    private router:Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void{

    this.userService.getUserConnexion().subscribe(data => {  
      this.userConnexion=data;
      if(this.userConnexion!=null){
        
        this.userService.getUserList().subscribe(data => {
          this.users=data;
        });

        
        
        this.userService.getUserAdminList().subscribe(data => {
          this.usersAdmin=data;
        });
        
      }
      else
        alert("connectez d'abord");
    });

    

  }

  deconnexion(){
    this.userService.logoutUser().subscribe(data => {
      this.userConnexion=data;
      this.router.navigate(['/login']);
    });
  }

  
  
  //router to update
  updateUser(id : number){
    this.router.navigate(['update-user',id]);
  }


  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe(data =>{
    this.getUsers();
  })
  
  }
}
