import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../signup2/course.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = "";
  password: string = "";
  courseService: any;
  constructor(private router:Router ,private http: HttpClient)
   {
  }
  Login(){
    console.log(this.email);
    console.log(this.password);
    
    let bodyData= {
      email:this.email,
      password:this.password,
    };
    
    this.http.post("http://localhost:8080/api/v1/employee/employee/login", bodyData).subscribe((resultData: any) =>{
      console.log(resultData); 

      if (resultData.message == 'Email not Exist ')
       {
        alert('Email not Exist');
      } 
     
       else if (resultData.message == 'password Not Match'  ) {
        alert('Invalid Password');
      } else if (
        resultData.message == 'LoginSuccess' 
      ) {
        this.router.navigateByUrl('/two');
       
      } else {
        alert(' Please Enter password ');
      }
    });
  }
}
