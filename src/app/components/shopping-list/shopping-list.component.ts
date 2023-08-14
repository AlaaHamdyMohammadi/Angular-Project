import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/Models/ingredient';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService],
})
export class ShoppingListComponent implements OnInit{
  ingredients: Ingredient[] | undefined;

  constructor(private shoppingServ: ShoppingListService){};

  ngOnInit(){
    this.shoppingServ.getAllIngredients();
  }
}
