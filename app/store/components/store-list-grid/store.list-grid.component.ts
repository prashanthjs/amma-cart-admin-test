import {Component, ViewChild} from '@angular/core';
import {GridComponent} from "@progress/kendo-angular-grid";
import {StoreDialogService} from "../../services/store.dialog.service";
import {Router} from "@angular/router";
import {StoreModel} from "../../model/store.model";
import {AppGrid} from "../../../shared/core/app.grid";
import {StoreDataService} from "../../services/store.data.service";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";

@Component({
  moduleId: module.id,
  selector: 'store-list-grid',
  templateUrl: 'store.list-grid.template.html'
})
export class StoreListGridComponent extends AppGrid<StoreModel> {

  @ViewChild(GridComponent) grid: GridComponent;

  constructor(dataService: StoreDataService,
              dialog: StoreDialogService,
              loadingService: SlimLoadingBarService,
              private router: Router) {
    super(dataService, dialog, loadingService);

  }

  view(id: string) {
    this.router.navigate(['/stores', id]);
  }
}
