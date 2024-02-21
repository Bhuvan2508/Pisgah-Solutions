import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = 'http://localhost:8080/api/v1/employee/course/get'; // Assuming your original backend endpoint
  private alternateApiUrl =
    'http://localhost:8080/api/v1/employee/training/save'; // Endpoint for the different database

  constructor(private http: HttpClient) {}

  // Method to fetch courses from the original database
  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  login(email:string): boolean{
    return true;
  }

  // Method to submit course data to the different database
  submitToDifferentDB(data: any): Observable<any> {
   // Retrieve user email from localStorage
    const userEmail = localStorage.getItem('userEmail');
    
    // Merge user email with course data
    const newData = { ...data, userEmail: userEmail };

    // Send data to the alternate database endpoint
    return this.http.post<any>(this.alternateApiUrl, newData);
  }

  getUserEmail(): string {
    return localStorage.getItem('userEmail') || '';
  }

  setUserEmail(email: string): void {
    localStorage.setItem('userEmail', email);
  }
}
