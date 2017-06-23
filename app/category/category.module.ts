import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {CategoryAutoCompleteComponent} from "./components/category-autocomplete/category.autocomplete.component";
import {CategoryDataService} from "./services/category.data.service";
import {CategoryDialogService} from "./services/category.dialog.service";
import {CategoryViewComponent} from "./components/category-view/category.view.component";
import {CategoryListGridComponent} from "./components/category-list-grid/category.list-grid.component";
import {CategoryListComponent} from "./components/category-list/category.list.component";
import {CategoryFormModal} from "./components/category-form/category.form.modal";


@NgModule({
  declarations: [CategoryAutoCompleteComponent, CategoryViewComponent, CategoryListGridComponent, CategoryListComponent, CategoryFormModal],
  imports: [SharedModule],
  providers: [CategoryDataService, CategoryDialogService],
  exports: [CategoryAutoCompleteComponent, CategoryListGridComponent, CategoryListComponent, CategoryViewComponent, CategoryFormModal],
  entryComponents: [CategoryFormModal]

})

export class CategoryModule {
}
