import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserAdmin } from '../../userAdmin';
import { Role } from '../../role';
import { UserService } from '../../user.service';
import { Company } from '../../company';
import {Router} from '@angular/router'
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user:User = new User();
  userAdmin:UserAdmin = new UserAdmin();

  userConnexion:User=new User();
  roleConnexion:Role=new Role();
  companyConnexion:Company=new Company();

  roles:Role[] = [];
  roleSelect:string="";
  roleSelectId:string="";
  roleSelectLibelle:string="";
  roleAffectation:Role = new Role();

  companies:Company[] = [];
  companyCreate:Company=new Company();
  companySelect:string="";
  companySelectId:string="";
  companySelectName:string="";
  companySelectAddress:string="";
  companySelectCity:string="";
  companySelectPostal_code:string="";
  companyAffectation:Company=new Company();

  carburant:boolean[] = [false,false,false,false,false];
  carburantString="";
  vehicule:boolean[] = [false,false,false,false,false,false];
  vehiculeString="";
  conducteur:boolean[] = [false,false,false,false,false,false];
  conducteurString="";

  constructor(private userService : UserService,
    private router: Router) {
     }

  ngOnInit(): void {
    this.userService.getUserConnexion().subscribe(data => {  
      this.userConnexion=data;
      if(this.userConnexion!=null){
        this.roleConnexion=this.userConnexion.role;
        if(this.roleConnexion.id==3){
          alert("Employee not exist");
        }
        else{
          this.getOptions();
          this.companyConnexion=this.userConnexion.company;
        }
      }
      else{
        alert("connectez d'abord");
      }
    });
  }

  private getOptions(): void{
    this.userService.getRoleList().subscribe(data=> {
      this.roles=data;
    });
    this.userService.getCompanyList().subscribe(data=> {
      this.companies=data;
    });
  }
  
  saveUser(){
    if(this.roleAffectation.id==1){
        this.userService.createUserAdmin(this.userAdmin).subscribe(data => {
          console.log(data);
        this.goToUserList();
      },
      error => console.log(error));
    }
    else{
      this.userService.createUser(this.user).subscribe(data => {
        this.goToUserList();
      },
      error => console.log(error));
    }

  }

  goToUserList(){
    this.router.navigate(['/users']);
  }


  onSubmit(){


    this.userService.getUserConnexion().subscribe(data => {  
      this.userConnexion=data;
      this.roleConnexion=this.userConnexion.role;
      if(this.userConnexion!=null && this.roleConnexion.id!=3){
    
        this.roleSelectId= this.roleSelect.substr(0, this.roleSelect.indexOf("/"));
        this.roleAffectation.id= parseInt(this.roleSelectId);

        this.roleSelect = this.roleSelect.replace(this.roleSelectId+"/",'');
        this.roleSelectLibelle= this.roleSelect.substr(0, this.roleSelect.indexOf("/"));
        this.roleAffectation.libelle= this.roleSelectLibelle;

        if(this.roleAffectation.id==1){
          this.userAdmin.role=this.roleAffectation;
        }
        
        
        if(this.roleAffectation.id==2 || this.roleAffectation.id==3){
          this.user.role=this.roleAffectation;
        }

    
        if(this.roleConnexion.id == 1 && this.roleAffectation.id == 3){
    
          this.companySelectId= this.companySelect.substr(0, this.companySelect.indexOf("/"));
          this.companyAffectation.idCompany= parseInt(this.companySelectId);
    
          this.companySelect = this.companySelect.replace(this.companySelectId+"/",'');
          this.companySelectName= this.companySelect.substr(0, this.companySelect.indexOf("/"));
          this.companyAffectation.name= this.companySelectName;

          this.companySelect = this.companySelect.replace(this.companySelectName+"/",'');
          this.companySelectAddress= this.companySelect.substr(0, this.companySelect.indexOf("/"));
          this.companyAffectation.address= this.companySelectAddress;

          this.companySelect = this.companySelect.replace(this.companySelectAddress+"/",'');
          this.companySelectCity= this.companySelect.substr(0, this.companySelect.indexOf("/"));
          this.companyAffectation.city= this.companySelectCity;

          this.companySelect = this.companySelect.replace(this.companySelectCity+"/",'');
          this.companySelectPostal_code= this.companySelect.substr(0, this.companySelect.indexOf("/"));
          this.companyAffectation.postalCode= this.companySelectPostal_code;
    
    
          this.user.company=this.companyAffectation;
        }
        
        if(this.roleConnexion.id == 1 && this.roleAffectation.id == 2){
          this.user.company=this.companyCreate;
        }
        
        if(this.roleConnexion.id==2){
          this.user.company=this.companyConnexion;
        }


        if(this.roleAffectation.id == 3){
          for(let i in this.carburant){
            if(this.carburant[i]==true)
              this.carburantString=this.carburantString+"1";
            else
              this.carburantString=this.carburantString+"0";
          }
          this.user.fnCarburant=this.carburantString;
    
          for(let i in this.vehicule){
            if(this.vehicule[i]==true)
              this.vehiculeString=this.vehiculeString+"1";
            else
              this.vehiculeString=this.vehiculeString+"0";
          }
          this.user.fnVehicule=this.vehiculeString;
        
          for(let i in this.conducteur){
            if(this.conducteur[i]==true)
              this.conducteurString=this.conducteurString+"1";
            else
              this.conducteurString=this.conducteurString+"0";
          }
          this.user.fnConducteur=this.conducteurString;
        }


        this.saveUser();
      }
      else
        alert("NOT EXIST"); 
    });
  }

  focusPermissionChef():boolean{
    let test=false;
    if(this.roleSelect=="2/chef entreprise/"){
      test=true

    }
    return test;
  }

  focusPermissionEmployee():boolean{
    let test=false;
    if(this.roleSelect=="3/employee/"){
      test=true

    }
    return test;
  }

  focusSelectEmployee():boolean{
    let test=false;
    if(this.roleConnexion.id==1){
      test=true

    }
    return test;
  }

}
