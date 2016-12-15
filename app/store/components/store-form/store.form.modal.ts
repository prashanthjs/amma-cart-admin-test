import {Component} from '@angular/core';

import {DialogRef} from 'angular2-modal';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {StoreModel} from "../../model/store.model";
import {ToastyService} from "ng2-toasty";
import {
  STORE_LOADING_ERROR_MESSAGE, STORE_SAVE_ERROR_MESSAGE, STORE_SAVE_SUCCESS_MESSAGE
} from "../../config/index";
import {AppModal, FormModalContext} from "../../../shared/core/app.modal";
import {StoreDataService} from "../../services/store.data.service";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";


@Component({
  selector: 'store-modal-content',
  moduleId: module.id,
  templateUrl: 'store.form.modal.template.html',
})
export class StoreFormModal extends AppModal<StoreModel> {

  logoLoading: boolean = false;

  constructor(dialog: DialogRef<FormModalContext>,
              formBuilder: FormBuilder,
              dataService: StoreDataService,
              toastyService: ToastyService,
              loadingService: SlimLoadingBarService) {
    super(dialog, formBuilder, dataService, toastyService, loadingService);
    this.loadingMessageError = STORE_LOADING_ERROR_MESSAGE;
    this.saveSuccessMessage = STORE_SAVE_SUCCESS_MESSAGE;
    this.saveErrorMessage = STORE_SAVE_ERROR_MESSAGE;
  }

  ngOnInit(): void {

    this.modelForm = this.formBuilder.group({
      _id: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
      title: ['', <any>Validators.required],
      email: ['', <any>Validators.required],
      website: '',
      contactNumber: ['', <any>Validators.required],
      parent: '',
      isActive: false,
      logo: '',
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


  logoRemove(): void {
    (<FormControl>this.modelForm.controls['logo'])
      .setValue(null);
  }

  resetStates(): void {
    super.resetStates();
    this.logoLoading = false;
  }
}
