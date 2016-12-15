import {Component} from '@angular/core';

import {DialogRef} from 'angular2-modal';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {UserGroupModel} from "../../model/user-group.model";
import {ToastyService} from "ng2-toasty";
import {
  USER_GROUP_LOADING_ERROR_MESSAGE, USER_GROUP_SAVE_ERROR_MESSAGE, USER_GROUP_SAVE_SUCCESS_MESSAGE
} from "../../config/index";
import {AppModal, FormModalContext} from "../../../shared/core/app.modal";
import {UserGroupDataService} from "../../services/user-group.data.service";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";
import {RoleDataService} from "../../../role/services/role.data.service";
import {RoleModel} from "../../../role/model/role.model";
import {ListModel} from "../../../shared/models/list.model";


@Component({
  selector: 'user-group-modal-content',
  moduleId: module.id,
  templateUrl: 'user-group.form.modal.template.html',
})
export class UserGroupFormModal extends AppModal<UserGroupModel> {

  roles: RoleModel[];

  constructor(dialog: DialogRef<FormModalContext>,
              formBuilder: FormBuilder,
              dataService: UserGroupDataService,
              toastyService: ToastyService,
              loadingService: SlimLoadingBarService,
              private roleDataService: RoleDataService) {
    super(dialog, formBuilder, dataService, toastyService, loadingService);
    this.loadingMessageError = USER_GROUP_LOADING_ERROR_MESSAGE;
    this.saveSuccessMessage = USER_GROUP_SAVE_SUCCESS_MESSAGE;
    this.saveErrorMessage = USER_GROUP_SAVE_ERROR_MESSAGE;
  }

  ngOnInit(): void {

    this.modelForm = this.formBuilder.group({
      _id: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
      title: ['', <any>Validators.required],
      roles: [[], <any>Validators.required]
    });

    this.roleDataService.getList().subscribe((result: ListModel<RoleModel>) => {
      this.roles = result.data;
    }, () => {

    }, () => {
      super.ngOnInit();
    });
  }

  roleChanged(roleId: string, event: any): void {
    const roleFormElement = this.modelForm.get('roles');
    let values = roleFormElement.value || [];
    if (event.target.checked) {
      if (values.indexOf(roleId) < 0) {
        values.push(roleId);
      }
    } else {
      let index = values.indexOf(roleId);
      if (index > -1) {
        values.splice(index, 1);
      }
    }
    roleFormElement.setValue(values);
  }
}
