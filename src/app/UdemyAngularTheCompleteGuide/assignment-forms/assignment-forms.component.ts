import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-assignment-forms',
  templateUrl: './assignment-forms.component.html',
  styleUrls: ['./assignment-forms.component.css']
})
export class AssignmentFormsComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  onSubmit() {
    console.log(this.signupForm);
  }
}
