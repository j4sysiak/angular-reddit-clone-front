import {Component, OnInit} from '@angular/core';
import {Ng4Recipe} from '../ng4-recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ng4-recipe-list',
  templateUrl: './ng4-recipe-list.component.html',
  styleUrls: ['./ng4-recipe-list.component.css']
})
export class Ng4RecipeListComponent implements OnInit {
  recipes: Ng4Recipe[] = [];

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipeService.recipesChanged
      .subscribe(
        // @ts-ignore
        (recipes: Ng4Recipe[]) => {
          this.recipes = recipes;
        });
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
























