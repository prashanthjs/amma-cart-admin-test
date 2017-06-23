import {Component, ViewChild} from '@angular/core';
import {GridComponent} from "@progress/kendo-angular-grid";
import {ProductFeatureDialogService} from "../../services/product-feature.dialog.service";
import {Router} from "@angular/router";
import {ProductFeatureModel} from "../../model/product-feature.model";
import {AppGrid} from "../../../shared/core/app.grid";
import {ProductFeatureDataService} from "../../services/product-feature.data.service";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";

@Component({
  moduleId: module.id,
  selector: 'product-feature-list-grid',
  templateUrl: 'product-feature.list-grid.template.html'
})
export class ProductFeatureListGridComponent extends AppGrid<ProductFeatureModel> {

  @ViewChild(GridComponent) grid: GridComponent;

  constructor(dataService: ProductFeatureDataService,
              dialog: ProductFeatureDialogService,
              loadingService: SlimLoadingBarService,
              private router: Router) {
    super(dataService, dialog, loadingService);

  }

  view(id: string) {
    this.router.navigate(['/product-features', id]);
  }
}
