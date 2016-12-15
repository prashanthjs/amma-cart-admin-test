import {Component, ViewChild} from '@angular/core';
import {GridComponent} from "@progress/kendo-angular-grid";
import {UserDialogService} from "../../services/user.dialog.service";
import {Router} from "@angular/router";
import {UserModel} from "../../model/user.model";
import {AppGrid} from "../../../shared/core/app.grid";
import {UserDataService} from "../../services/user.data.service";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";

@Component({
  moduleId: module.id,
  selector: 'user-list-grid',
  templateUrl: 'user-list-grid.template.html'
})
export class UserListGridComponent extends AppGrid<UserModel> {

  @ViewChild(GridComponent) grid: GridComponent;

  constructor(dataService: UserDataService,
              dialog: UserDialogService,
              loadingService: SlimLoadingBarService,
              private router: Router) {
    super(dataService, dialog, loadingService);

  }

  view(id: string) {
    this.router.navigate(['/users', id]);
  }
}
