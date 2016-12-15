import {Component, ViewChild} from '@angular/core';
import {GridComponent} from "@progress/kendo-angular-grid";
import {UserGroupDialogService} from "../../services/user-group.dialog.service";
import {Router} from "@angular/router";
import {UserGroupModel} from "../../model/user-group.model";
import {AppGrid} from "../../../shared/core/app.grid";
import {UserGroupDataService} from "../../services/user-group.data.service";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";

@Component({
  moduleId: module.id,
  selector: 'user-group-list-grid',
  templateUrl: 'user-group.list-grid.template.html'
})
export class UserGroupListGridComponent extends AppGrid<UserGroupModel> {

  @ViewChild(GridComponent) grid: GridComponent;

  constructor(dataService: UserGroupDataService,
              dialog: UserGroupDialogService,
              loadingService: SlimLoadingBarService,
              private router: Router) {
    super(dataService, dialog, loadingService);

  }

  view(id: string) {
    this.router.navigate(['/user-groups', id]);
  }
}
