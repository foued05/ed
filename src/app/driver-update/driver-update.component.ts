import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from '../driver';
import { UserService } from '../user.service';

@Component({
  selector: 'app-driver-update',
  templateUrl: './driver-update.component.html',
  styleUrls: ['./driver-update.component.css']
})
export class DriverUpdateComponent implements OnInit {

  driver:Driver=new Driver();
  
  id!: number;

  constructor(private userService : UserService, 
    private route :ActivatedRoute ,
     private router : Router) { }

  ngOnInit(): void {
    
    this.id=this.route.snapshot.params[`id`];
    
    this.userService.getDriverById(this.id).subscribe(data => {
      this.driver = data;
    }, error => console.log(error));
  
  }

  onSubmit(){

    this.userService.updateDriver(this.id,this.driver).subscribe(data =>{
      console.log(data);
      this.goToDriverList();
    }, error => console.log(error));

  }

  goToDriverList(){
    this.router.navigate(['/list-driver']);
  }

}
