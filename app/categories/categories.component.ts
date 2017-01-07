/**
 * Created by beateullmann on 07.01.17.
 */
import { Component, OnInit }  from '@angular/core';
import {Category} from "./shared/category.model";
import {CategoryService} from "./shared/category.service";

@Component({
  moduleId: module.id,
  selector: 'bbq-categories',
  templateUrl: 'categories.component.html',
  styleUrls: [ 'categories.component.css' ]
})

export class CategoriesComponent{

  categories: Category[];

  constructor(private categoryService: CategoryService) {}

  getCategories(): void {
    this.categoryService.getCategories().then(categories => this.categories = categories);
  }

  ngOnInit(): void {
    this.getCategories();
  }

}
