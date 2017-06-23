import {Component, ViewChild} from '@angular/core';
import {ProductFeatureListGridComponent} from "../product-feature-list-grid/product-feature.list-grid.component";
import {ProductFeatureDialogService} from "../../services/product-feature.dialog.service";
import {AppListComponent} from "../../../shared/core/app.list";
import {ProductFeatureModel} from "../../model/product-feature.model";


@Component({
  moduleId: module.id,
  selector: 'product-feature-list',
  templateUrl: 'product-feature.list.template.html'
})

export class ProductFeatureListComponent extends AppListComponent<ProductFeatureModel> {

  @ViewChild(ProductFeatureListGridComponent) list: ProductFeatureListGridComponent;

  constructor(dialog: ProductFeatureDialogService) {
    super(dialog);
  }
}
