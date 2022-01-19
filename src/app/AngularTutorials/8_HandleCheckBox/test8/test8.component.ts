import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test8',
  templateUrl: './test8.component.html',
  styleUrls: ['./test8.component.css']
})
export class Test8Component implements OnInit {
  public student: student;
  public courselist: course[];
  public studentlist: student[] = [];
  public uniqueId = 0;
  public studentid =  0;

  constructor() { }

  ngOnInit(): void {
    this.getCourses();
    this.resetForm();
  }

  getCourses() {
    this.courselist = [
      {id: 1, name: 'JAVA', isselected: false},
      {id: 2, name: 'C#', isselected: false},
      {id: 3, name: 'PYTHON', isselected: false}
    ];
  }

  // onSubmit() {
  //   if (this.studentid === 0) {
  //     this.uniqueId = this.uniqueId + 1;
  //     this.student.id = this.uniqueId;
  //     this.studentlist.push(this.student);
  //   } else {
  //     for (var i = 0; i < this.studentlist.length; i++) {
  //       if (this.studentlist[i] === this.studentid) {
  //         this.studentlist[i].name = this.student.name;
  //         this.studentlist[i].courseid = this.student.courseid;
  //         this.studentlist[i].coursename = this.student.coursename;
  //       }
  //     }
  //     this.studentid = 0;
  //   }
  //   this.resetForm();
  //   this.courselist.forEach(item => item.isselected = false);
  // }

  onChange() {
    console.warn(this.courselist);
    // this.student.courseid = this.courselist.filter(student => student.?????);
    // this.student.coursename = this.courselist.filter(student => student.?????);
  }

  edit(id: number) {
     // #TO DO
  }

  private resetForm() {
    this.student = {
      id: null,
      name: '',
      courseid: '',
      coursename: ''
    };
  }
}

class student {
  id: number;
  name: string;
  courseid: string;
  coursename: string;
}


class course {
  id: number;
  name: string;
  isselected: boolean;
}
