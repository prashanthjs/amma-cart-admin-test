import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {ProductFeatureAutoCompleteComponent} from "./components/product-feature-autocomplete/product-feature.autocomplete.component";
import {ProductFeatureDataService} from "./services/product-feature.data.service";
import {ProductFeatureDialogService} from "./services/product-feature.dialog.service";
import {ProductFeatureViewComponent} from "./components/product-feature-view/product-feature.view.component";
import {ProductFeatureListGridComponent} from "./components/product-feature-list-grid/product-feature.list-grid.component";
import {ProductFeatureListComponent} from "./components/product-feature-list/product-feature.list.component";
import {ProductFeatureFormModal} from "./components/product-feature-form/product-feature.form.modal";


@NgModule({
  declarations: [ProductFeatureAutoCompleteComponent, ProductFeatureViewComponent, ProductFeatureListGridComponent, ProductFeatureListComponent, ProductFeatureFormModal],
  imports: [SharedModule],
  providers: [ProductFeatureDataService, ProductFeatureDialogService],
  exports: [ProductFeatureAutoCompleteComponent, ProductFeatureListGridComponent, ProductFeatureListComponent, ProductFeatureViewComponent, ProductFeatureFormModal],
  entryComponents: [ProductFeatureFormModal]

})

export class ProductFeatureModule {
}
