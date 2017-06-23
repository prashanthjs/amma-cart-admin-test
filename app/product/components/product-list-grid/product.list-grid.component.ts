import {Component, ViewChild} from '@angular/core';
import {GridComponent} from "@progress/kendo-angular-grid";
import {ProductDialogService} from "../../services/product.dialog.service";
import {Router} from "@angular/router";
import {ProductModel} from "../../model/product.model";
import {AppGrid} from "../../../shared/core/app.grid";
import {ProductDataService} from "../../services/product.data.service";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";

@Component({
  moduleId: module.id,
  selector: 'product-list-grid',
  templateUrl: 'product.list-grid.template.html'
})
export class ProductListGridComponent extends AppGrid<ProductModel> {

  @ViewChild(GridComponent) grid: GridComponent;

  constructor(dataService: ProductDataService,
              dialog: ProductDialogService,
              loadingService: SlimLoadingBarService,
              private router: Router) {
    super(dataService, dialog, loadingService);

  }

  view(id: string) {
    this.router.navigate(['/products', id]);
  }
}
