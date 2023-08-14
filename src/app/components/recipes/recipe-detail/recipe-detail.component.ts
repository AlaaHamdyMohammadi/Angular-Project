import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/Models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input() recipe!: Recipe;

  constructor(private recipeServ: RecipeService){
    
  }

  onAddToShoppingList(){
    this.recipeServ.addToShoppingList(this.recipe.ingredients)
  };
}
