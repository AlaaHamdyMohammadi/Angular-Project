import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../Models/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe1',
      'This is simply test1',
      'https://media.homecentre.com/i/homecentre/161298546-161298546-HC140219_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$'
    ),
    new Recipe(
      'A Test Recipe2',
      'This is simply test2',
      'https://media.homecentre.com/i/homecentre/161298546-161298546-HC140219_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$'
    ),
  ];

  getRecipes(){
    //To get shallow copy of array
    return this.recipes.slice();
  };
  constructor() {}
}
