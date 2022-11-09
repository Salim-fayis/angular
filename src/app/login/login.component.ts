import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {   //3rd execution
  aim='your perfect banking partner';
  accounts='enter your acno here';
  acno="";
  pswd="";
  constructor(private router:Router,private ds:DataService) { }  //first execution
  // dependency injection





  ngOnInit(): void {  //life cycle hooks - initial process // 2nd execution
  }
  // userDetails:any={ //objects of objects
  //   1000:{acno:1000,username:"gopik",password:1000,balance:10000},
  //   1001:{acno:1001,username:"soja",password:1001,balance:10000},
  //   1002:{acno:1002,username:"dani",password:1002,balance:10000},
  // }
  // user defined function()  //4th execution
  acnoChange(event:any){
    //console.log(event);
    console.log(event.target.value);
    this.acno=event.target.value;
  }
    pswdChange(event:any){
      console.log(event.target.value);
      this.pswd=event.target.value;
    }
    
    
  
  login(){
   // alert('login clicked');
   var acno=this.acno;
   var pswd=this.pswd;

    const result=this.ds.login(acno,pswd);

    if(result){

    
      alert("login sucessful");

      this.router.navigateByUrl('dashboard');
      
    }
    // else{
    //   alert("incorrect password");
    // }

   }
  //  else{
  //   alert("user doesnot exist");
    
  //  }



  // login(a:any,p:any){
  //   // alert('login clicked');
  //   var acno=a.value;
  //   var pswd=p.value;
    
  //   var userDetails=this.userDetails;
  //   if(acno in userDetails){
  //    if(pswd==userDetails[acno]['password']){
  //      alert("login sucessful");
       
  //    }
  //    else{
  //      alert("incorrect password");
  //    }
 
  //   }
  //   else{
  //    alert("user doesnot exist");
     
  //   }
 
  //  }

}