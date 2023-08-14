import { Injectable } from '@angular/core';
import { Ingredient } from '../Models/ingredient';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 10),
  ];
  constructor() {}

  getAllIngredients(){
    this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }
}
