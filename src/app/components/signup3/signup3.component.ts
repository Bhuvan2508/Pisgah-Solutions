import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from './course.service';

@Component({
  selector: 'app-signup3',
  templateUrl: './signup3.component.html',
  styleUrls: ['./signup3.component.scss'],
})
export class Signup3Component implements OnInit {
  courses: any[] | undefined;
  email: string | undefined;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getCourses();
    this.route.queryParams.subscribe((params) => {
      this.email = params['email'];
    });
  }

  // Method to fetch courses from the original database
  getCourses() {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }

  // Method to handle submission of course data to different database
  submitToDifferentDB(course: any) {
    this.courseService.submitToDifferentDB(course).subscribe((response) => {
      // Handle response from the backend if needed
      console.log('Data submitted to different database:', response);
      alert('You Will get Update');
    });
  }
}
