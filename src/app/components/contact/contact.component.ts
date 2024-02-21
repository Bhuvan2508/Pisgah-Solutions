import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactname: string = '';
  email: string = '';
  subject: string = '';
  phone: string = '';
  message: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  save() {

    let bodyData = {
      contactname: this.contactname,
      email: this.email,
      subject: this.subject,
      phone: this.phone,
      message: this.message,
    };

    this.http
      .post('http://localhost:8080/api/v1/employee/contact/save', bodyData, {
        responseType: 'text',
      })
      .subscribe((resultData: any) => {
       
          alert('Submitted Successfully');
       
      });
  }
}
