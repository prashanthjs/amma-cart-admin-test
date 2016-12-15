import {Component} from '@angular/core';

import {DialogRef} from 'angular2-modal';
import {BSModalContext} from 'angular2-modal/plugins/bootstrap';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {UserModel} from "../../model/user.model";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import * as moment from 'moment';
import {ToastyService} from "ng2-toasty";
import {
  USER_LOADING_ERROR_MESSAGE, USER_SAVE_ERROR_MESSAGE, USER_SAVE_SUCCESS_MESSAGE
} from "../../config/index";
import {AppModal} from "../../../shared/core/app.modal";
import {UserDataService} from "../../services/user.data.service";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";


export class UserFormModalContext extends BSModalContext {
  id?: string;
}

/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
@Component({
  selector: 'user-modal-content',
  moduleId: module.id,
  templateUrl: 'user.form.modal.template.html',
})
export class UserFormModal extends AppModal<UserModel> {

  profilePicLoading: boolean = false;
  store = {
    searching: false,
    searchFailed: false
  };

  constructor(dialog: DialogRef<UserFormModalContext>,
              formBuilder: FormBuilder,
              dataService: UserDataService,
              toastyService: ToastyService,
              loadingService: SlimLoadingBarService) {
    super(dialog, formBuilder, dataService, toastyService, loadingService);
    this.loadingMessageError = USER_LOADING_ERROR_MESSAGE;
    this.saveSuccessMessage = USER_SAVE_SUCCESS_MESSAGE;
    this.saveErrorMessage = USER_SAVE_ERROR_MESSAGE;
  }

  ngOnInit(): void {

    this.modelForm = this.formBuilder.group({
      _id: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
      firstName: ['', <any>Validators.required],
      lastName: ['', <any>Validators.required],
      middleName: [''],
      password: ['', <any>Validators.required],
      rePassword: ['', <any>Validators.required],
      email: ['', <any>Validators.required],
      contactNumber: ['', <any>Validators.required],
      dob: ['', <any>Validators.required],
      userGroup: ['', <any>Validators.required],
      gender: 'male',
      isActive: false,
      profilePic: '',
      available: this.formBuilder.group({
        store: this.formBuilder.group({
          name: ['', <any>Validators.required],
          availableToChildren: [false, <any>Validators.required]
        })
      }),
      address: this.formBuilder.group({
        addressLine1: ['', <any>Validators.required],
        addressLine2: '',
        town: ['', <any>Validators.required],
        county: '',
        country: ['United Kingdom', <any>Validators.required],
        postcode: ['', <any>Validators.required]
      })
    });
    super.ngOnInit();

  }


  profilePicRemove() {
    (<FormControl>this.modelForm.controls['profilePic'])
      .setValue(null);
  }


  protected transformModelToFormValues(model: any) {
    model = super.transformModelToFormValues(model);
    const dob = model['dob'];
    if (dob) {
      const date = moment(dob);
      model['dob'] = {year: date.year(), month: date.month() + 1, day: date.date()};
    }
    return model;
  }

  protected transformFormToModelValues(model: any): UserModel {
    model = super.transformFormToModelValues(model);
    delete model['rePassword'];
    if (this.id) {
      delete model['password'];
    }
    model['dob'] = moment([model['dob'].year, model['dob'].month - 1, model['dob'].day]).toISOString();
    return model;
  }

  protected modifyForm() {
    super.modifyForm();
    const password = this.modelForm.get('password');
    const rePassword = this.modelForm.get('rePassword');
    if (this.id) {
      password.clearValidators();
      rePassword.clearValidators();
    } else {
      password.setValidators(Validators.required);
      rePassword.setValidators(Validators.required);
    }
    password.updateValueAndValidity();
    rePassword.updateValueAndValidity();
  }

  protected resetStates() {
    super.resetStates();
    this.profilePicLoading = false;

  }
}
