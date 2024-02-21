import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
})
export class TwoComponent implements OnInit {
[x: string]: any;
  courses: any[] | undefined;
  

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }

  submitToDifferentDB(course: any) {

    this.courseService.submitToDifferentDB(course).subscribe((resultData: any) => {
      console.log('Data submitted to different database:', resultData);


      
      if (resultData.message == 'Submitted Successfully') {
        alert('Thanks For Your Interest Our Team Will Reach You Shortly');
      } else if (
        resultData.message ==
        'Email does not exist in the employee table. Unable to submit training.'
      ) {
        alert(
          'Email does not match . Unable to submit your data.'
        );
      }
    });
  }
}
