import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {ProductAutoCompleteComponent} from "./components/product-autocomplete/product.autocomplete.component";
import {ProductDataService} from "./services/product.data.service";
import {ProductDialogService} from "./services/product.dialog.service";
import {ProductViewComponent} from "./components/product-view/product.view.component";
import {ProductListGridComponent} from "./components/product-list-grid/product.list-grid.component";
import {ProductListComponent} from "./components/product-list/product.list.component";
import {ProductFormModal} from "./components/product-form/product.form.modal";
import {StoreModule} from "../store/store.module";


@NgModule({
  declarations: [ProductAutoCompleteComponent, ProductViewComponent, ProductListGridComponent, ProductListComponent, ProductFormModal],
  imports: [SharedModule, StoreModule],
  providers: [ProductDataService, ProductDialogService],
  exports: [ProductAutoCompleteComponent, ProductListGridComponent, ProductListComponent, ProductViewComponent, ProductFormModal],
  entryComponents: [ProductFormModal]

})

export class ProductModule {
}
