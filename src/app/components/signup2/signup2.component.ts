import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from './course.service';


@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.scss'],
})
export class Signup2Component implements OnInit {
  email: any;
  password: any;
  Login() {
    throw new Error('Method not implemented.');
  }
  constructor(private courseService: CourseService, private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login(email: string, password: string) {
    this.courseService.login(email, password).subscribe(
      (response) => {
        // Assuming successful login response contains user data
        const user = response.user;
        // Store user details in local storage
        localStorage.setItem('currentUser', JSON.stringify(user));
        // Navigate to next page
        this.router.navigate(['/next-page']);
      },
      (error) => {
        // Handle login error
        console.error('Login failed:', error);
      }
    );
  }
}

