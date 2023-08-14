import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/Models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})

export class RecipesComponent implements OnInit{
  selectedRecipe : Recipe | undefined;

  constructor(private recipeServ: RecipeService){

  }

  ngOnInit(){
    this.recipeServ.recipeSelected.subscribe(recipe => {
      this.selectedRecipe = recipe
    })
  }
}
