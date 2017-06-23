import {Component, ViewChild} from '@angular/core';
import {CategoryListGridComponent} from "../category-list-grid/category.list-grid.component";
import {CategoryDialogService} from "../../services/category.dialog.service";
import {AppListComponent} from "../../../shared/core/app.list";
import {CategoryModel} from "../../model/category.model";


@Component({
  moduleId: module.id,
  selector: 'category-list',
  templateUrl: 'category.list.template.html'
})

export class CategoryListComponent extends AppListComponent<CategoryModel> {

  @ViewChild(CategoryListGridComponent) list: CategoryListGridComponent;

  constructor(dialog: CategoryDialogService) {
    super(dialog);
  }
}
