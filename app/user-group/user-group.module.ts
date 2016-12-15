import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {UserGroupAutoCompleteComponent} from "./components/user-group-autocomplete/user-group.autocomplete.component";
import {UserGroupDataService} from "./services/user-group.data.service";
import {UserGroupDialogService} from "./services/user-group.dialog.service";
import {UserGroupListGridComponent} from "./components/user-group-list-grid/user-group.list-grid.component";
import {UserGroupListComponent} from "./components/user-group-list/user-group.list.component";
import {UserGroupFormModal} from "./components/user-group-form/user-group.form.modal";
import {RoleModule} from "../role/role.module";


@NgModule({
  declarations: [UserGroupAutoCompleteComponent, UserGroupListGridComponent, UserGroupListComponent, UserGroupFormModal],
  imports: [SharedModule, RoleModule],
  providers: [UserGroupDataService, UserGroupDialogService],
  exports: [UserGroupAutoCompleteComponent, UserGroupListGridComponent, UserGroupListComponent, UserGroupFormModal],
  entryComponents: [UserGroupFormModal]

})

export class UserGroupModule {
}
