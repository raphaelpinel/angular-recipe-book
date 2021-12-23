import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is just a test',
      'https://c.pxhere.com/photos/41/62/close_up_cucumber_cuisine_delicious_dinner_dish_fish_food-1557745.jpg!d'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
