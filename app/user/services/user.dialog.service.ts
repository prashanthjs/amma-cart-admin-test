import {Injectable} from '@angular/core';
import {Modal} from 'angular2-modal/plugins/bootstrap';
import {UserFormModal} from "../components/user-form/user.form.modal";
import {AppDialogService} from "../../shared/core/app.dialog.service";
import {UserModel} from "../model/user.model";
import {UserDataService} from "./user.data.service";

@Injectable()
export class UserDialogService extends AppDialogService<UserModel>{

  constructor(modal: Modal,
              dataService: UserDataService) {
      super(modal, dataService);
      this.formModal = UserFormModal;
      this.deleteTitle = 'Delete User';
      this.deleteMessage = '<h4> Are you sure want to delete user %(id)s</h4>'
  }
}
