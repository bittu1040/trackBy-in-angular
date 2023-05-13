import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  courses;
  name = 'Track By Example';
  store: any;

  ngOnInit(){
    this.courses = [
      { id:1, name:'course1' },
      { id:2, name:'course2' },
      { id:3, name:'course3' }
    ];
  }

  constructor() {
    this.store = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
      { id: 3, name: 'Test' },
    ];
  }
  loadCourses(){
    this.courses = [
      { id:1, name:'course1' },
      { id:2, name:'course2' },
      { id:3, name:'course3' },
      { id:1, name:'course1' },
      { id:2, name:'course2' },
      { id:3, name:'course3' }
    ];
  }

  getNewData() {
    this.store = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
      { id: 3, name: 'Test' },
      { id: 4, name: 'Sam' },
      { id: 5, name: 'Kelly' },
      { id: 6, name: 'Thor' },
    ];
  }

  trackCourse(index,course){
    return course ? course.id : undefined;
  }
  trackByFn(index, data){
    return index;
  }
}
