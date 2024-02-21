import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  employeename: string = '';
  email: string = '';
  number: string = '';
  password: string = '';
  education: string = '';
  skills: string = '';
  nonitskills: string = '';
  othercertifications: string = '';
  totalyearsofexp: string = '';
  totalyearsofindexp: string = '';
  nubofclients: string = '';
  trainings: string = '';
  quetionone: string = '';
  quetiontwo:string='';
  constructor(private router: Router, private http: HttpClient) {}
  login() {
    
    console.log(this.employeename);
    console.log(this.email);
    console.log(this.number);
    console.log(this.password);
    console.log(this.education);
    console.log(this.skills);
    console.log(this.nonitskills);
    console.log(this.othercertifications);
    console.log(this.totalyearsofexp);
    console.log(this.totalyearsofindexp);
    console.log(this.nubofclients);
    console.log(this.trainings);
    console.log(this.quetionone);
    console.log(this.quetiontwo);
    let bodyData = {
      employeename: this.employeename,
      email: this.email,
      number: this.number,
      password: this.password,
      education: this.education,
      skills: this.skills,
      nonitskills: this.nonitskills,
      othercertifications: this.othercertifications,
      totalyearsofexp: this.totalyearsofexp,
      totalyearsofindexp: this.totalyearsofindexp,
      nubofclients: this.nubofclients,
      trainings: this.trainings,
      quetionone: this.quetionone,
      quetiontwo:this.quetiontwo,
    };













    
    this.http.post("http://localhost:8080/api/v1/employee/employee/save",bodyData).subscribe((resultData: any) => {
        console.log(resultData);
        if (resultData.message == 'Customer ID already Exist') {
          alert('Customer ID already Exist');
        } else if (resultData.message == 'RegisterSuccess') {
          alert('Thank You For Register')
          this.router.navigateByUrl('/one');
        } 
      });
  }
}
