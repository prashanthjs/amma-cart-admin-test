import {Component, ViewChild} from '@angular/core';
import {UserListGridComponent} from "../user-list-grid/user-list-grid.component";
import {UserDialogService} from "../../services/user.dialog.service";
import {AppListComponent} from "../../../shared/core/app.list";
import {UserModel} from "../../model/user.model";


@Component({
  moduleId: module.id,
  selector: 'user-list',
  templateUrl: 'user-list.template.html'
})

export class UserListComponent extends AppListComponent<UserModel> {

  @ViewChild(UserListGridComponent) list: UserListGridComponent;

  constructor(dialog: UserDialogService) {
    super(dialog);
  }
}
