import { Component } from '@angular/core';
import { Recipe } from 'src/app/Models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe = new Recipe(
    'A Test Recipe',
    'This is simply test',
    'https://media.homecentre.com/i/homecentre/161298546-161298546-HC140219_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$'
  );
}
