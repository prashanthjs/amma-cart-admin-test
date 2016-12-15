import {Component, ViewChild} from '@angular/core';
import {UserGroupListGridComponent} from "../user-group-list-grid/user-group.list-grid.component";
import {UserGroupDialogService} from "../../services/user-group.dialog.service";
import {AppListComponent} from "../../../shared/core/app.list";
import {UserGroupModel} from "../../model/user-group.model";


@Component({
  moduleId: module.id,
  selector: 'user-group-list',
  templateUrl: 'user-group.list.template.html'
})

export class UserGroupListComponent extends AppListComponent<UserGroupModel> {

  @ViewChild(UserGroupListGridComponent) list: UserGroupListGridComponent;

  constructor(dialog: UserGroupDialogService) {
    super(dialog);
  }
}
