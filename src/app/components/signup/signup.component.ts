import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {

  employeename: string="";
  email: string = "";
  number: string = "";
  password: string ="";
  



  constructor(private router:Router ,private http:HttpClient)
  {

  }
  save()
  {
    let bodyData={
      "employeename":this.employeename,
      "email":this.email,
      "number":this.number,
      "password":this.password
    };
    this.http.post("http://localhost:8080/api/v1/employee/save",bodyData,{responseType:'text'}).subscribe((resultData:any)=>
    {
      console.log(resultData);
      this.router.navigateByUrl('/signup2');
    });
  }
}
