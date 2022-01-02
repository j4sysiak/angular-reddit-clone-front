import { Component, OnInit } from '@angular/core';
import {Ng4AuthService} from '../../ng4-auth/ng4-auth.service';

@Component({
  selector: 'app-ng4-recipe-start',
  templateUrl: './ng4-recipe-start.component.html',
  styleUrls: ['./ng4-recipe-start.component.css']
})
export class Ng4RecipeStartComponent implements OnInit {

  constructor(private authService: Ng4AuthService) {}

  ngOnInit(): void {
    this.authService.autoLogin();
  }

}
