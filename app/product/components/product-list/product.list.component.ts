import {Component, ViewChild} from '@angular/core';
import {ProductListGridComponent} from "../product-list-grid/product.list-grid.component";
import {ProductDialogService} from "../../services/product.dialog.service";
import {AppListComponent} from "../../../shared/core/app.list";
import {ProductModel} from "../../model/product.model";


@Component({
  moduleId: module.id,
  selector: 'product-list',
  templateUrl: 'product.list.template.html'
})

export class ProductListComponent extends AppListComponent<ProductModel> {

  @ViewChild(ProductListGridComponent) list: ProductListGridComponent;

  constructor(dialog: ProductDialogService) {
    super(dialog);
  }
}
