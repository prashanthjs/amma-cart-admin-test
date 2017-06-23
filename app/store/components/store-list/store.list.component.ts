import {Component, ViewChild} from '@angular/core';
import {StoreListGridComponent} from "../store-list-grid/store.list-grid.component";
import {StoreDialogService} from "../../services/store.dialog.service";
import {AppListComponent} from "../../../shared/core/app.list";
import {StoreModel} from "../../model/store.model";


@Component({
  moduleId: module.id,
  selector: 'store-list',
  templateUrl: 'store.list.template.html'
})

export class StoreListComponent extends AppListComponent<StoreModel> {

  @ViewChild(StoreListGridComponent) list: StoreListGridComponent;

  constructor(dialog: StoreDialogService) {
    super(dialog);
  }
}
