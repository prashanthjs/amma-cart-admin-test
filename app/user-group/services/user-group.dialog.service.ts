import {Injectable} from '@angular/core';
import {Modal} from 'angular2-modal/plugins/bootstrap';
import {UserGroupFormModal} from "../components/user-group-form/user-group.form.modal";
import {AppDialogService} from "../../shared/core/app.dialog.service";
import {UserGroupModel} from "../model/user-group.model";
import {UserGroupDataService} from "./user-group.data.service";
import {USER_GROUP_DELETE_TITLE, USER_GROUP_DELETE_MESSAGE} from "../config/index";

@Injectable()
export class UserGroupDialogService extends AppDialogService<UserGroupModel> {

  constructor(modal: Modal,
              dataService: UserGroupDataService) {
    super(modal, dataService);
    this.formModal = UserGroupFormModal;
    this.deleteTitle = USER_GROUP_DELETE_TITLE;
    this.deleteMessage = USER_GROUP_DELETE_MESSAGE;
  }
}
