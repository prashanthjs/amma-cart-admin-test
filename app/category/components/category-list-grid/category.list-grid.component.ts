import {Component, ViewChild} from '@angular/core';
import {GridComponent} from "@progress/kendo-angular-grid";
import {CategoryDialogService} from "../../services/category.dialog.service";
import {Router} from "@angular/router";
import {CategoryModel} from "../../model/category.model";
import {AppGrid} from "../../../shared/core/app.grid";
import {CategoryDataService} from "../../services/category.data.service";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";

@Component({
  moduleId: module.id,
  selector: 'category-list-grid',
  templateUrl: 'category.list-grid.template.html'
})
export class CategoryListGridComponent extends AppGrid<CategoryModel> {

  @ViewChild(GridComponent) grid: GridComponent;

  constructor(dataService: CategoryDataService,
              dialog: CategoryDialogService,
              loadingService: SlimLoadingBarService,
              private router: Router) {
    super(dataService, dialog, loadingService);

  }

  view(id: string) {
    this.router.navigate(['/categories', id]);
  }
}
