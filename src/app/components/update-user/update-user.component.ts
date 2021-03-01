import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../user';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/company';
import { Role } from 'src/app/role';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {


id!: number;

user : User=new User();
userConnexion:User=new User();




constructor(private userService : UserService, 
    private route :ActivatedRoute ,
     private router : Router) { }

  ngOnInit() {
    this.userService.getUserConnexion().subscribe(data => {  
      this.userConnexion=data;
      if(this.userConnexion!=null){
        
        this.id=this.route.snapshot.params[`id`];
        this.userService.getUserById(this.id).subscribe(data => {
          this.user = data;
        }, error => console.log(error));
        
      }
      else
        alert("connectez d'abord");
    });
    
  }

  onSubmit(){
    this.userService.updateUser(this.id,this.user).subscribe(data =>{
      this.goToUserList();
    }, error => console.log(error));
  }


  goToUserList(){
    this.router.navigate(['/users']);
  }


}
