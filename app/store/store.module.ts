import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {StoreAutoCompleteComponent} from "./components/store-autocomplete/store-autocomplete.component";
import {StoreDataService} from "./services/store.data.service";
import {StoreDialogService} from "./services/store.dialog.service";
import {StoreViewComponent} from "./components/store-view/store-view.component";
import {StoreListGridComponent} from "./components/store-list-grid/store-list-grid.component";
import {StoreListComponent} from "./components/store-list/store-list.component";
import {StoreFormModal} from "./components/store-form/store.form.modal";


@NgModule({
  declarations: [StoreAutoCompleteComponent, StoreViewComponent, StoreListGridComponent, StoreListComponent, StoreFormModal],
  imports: [SharedModule],
  providers: [StoreDataService, StoreDialogService],
  exports: [StoreAutoCompleteComponent, StoreListGridComponent, StoreListComponent, StoreViewComponent, StoreFormModal],
  entryComponents: [StoreFormModal]

})

export class StoreModule {
}
