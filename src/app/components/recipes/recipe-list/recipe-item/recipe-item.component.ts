import { Component, Input} from '@angular/core';
import { Recipe } from 'src/app/Models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {

  @Input() recipe!: Recipe;

  constructor(private recipeService: RecipeService){
    
  }
  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
  };
}
