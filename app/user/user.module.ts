import {NgModule} from "@angular/core";
import {UserListComponent} from "./components/user-list/user.list.component";
import {UserDataService} from "./services/user.data.service";
import {SharedModule} from "../shared/shared.module";
import {UserListGridComponent} from "./components/user-list-grid/user.list-grid.component";
import {UserFormModal} from "./components/user-form/user.form.modal";
import {StoreModule} from "../store/store.module";
import {UserGroupModule} from "../user-group/user-group.module";
import {UserViewComponent} from "./components/user-view/user.view.component";
import {UserDialogService} from "./services/user.dialog.service";


@NgModule({
  declarations: [UserListGridComponent, UserListComponent, UserFormModal, UserViewComponent],
  imports: [SharedModule, StoreModule, UserGroupModule],
  providers: [UserDataService, UserDialogService ],
  exports: [UserListGridComponent, UserListComponent, UserViewComponent],
  entryComponents: [UserFormModal]
})

export class UserModule {
}
