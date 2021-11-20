import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-ng4-recipe-edit',
  templateUrl: './ng4-recipe-edit.component.html',
  styleUrls: ['./ng4-recipe-edit.component.css']
})
export class Ng4RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          console.log(this.editMode);
        }
      );
  }

}
