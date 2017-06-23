import {Component} from '@angular/core';

import {DialogRef} from 'angular2-modal';
import {FormBuilder, FormControl, Validators, FormArray, FormGroup} from "@angular/forms";
import {ProductFeatureModel} from "../../model/product-feature.model";
import {ToastyService} from "ng2-toasty";
import {
  PRODUCT_FEATURE_LOADING_ERROR_MESSAGE, PRODUCT_FEATURE_SAVE_ERROR_MESSAGE, PRODUCT_FEATURE_SAVE_SUCCESS_MESSAGE
} from "../../config/index";
import {AppModal, FormModalContext} from "../../../shared/core/app.modal";
import {ProductFeatureDataService} from "../../services/product-feature.data.service";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";


@Component({
  selector: 'product-feature-modal-content',
  moduleId: module.id,
  templateUrl: 'product-feature.form.modal.template.html',
})
export class ProductFeatureFormModal extends AppModal<ProductFeatureModel> {

  constructor(dialog: DialogRef<FormModalContext>,
              formBuilder: FormBuilder,
              dataService: ProductFeatureDataService,
              toastyService: ToastyService,
              loadingService: SlimLoadingBarService) {
    super(dialog, formBuilder, dataService, toastyService, loadingService);
    this.loadingMessageError = PRODUCT_FEATURE_LOADING_ERROR_MESSAGE;
    this.saveSuccessMessage = PRODUCT_FEATURE_SAVE_SUCCESS_MESSAGE;
    this.saveErrorMessage = PRODUCT_FEATURE_SAVE_ERROR_MESSAGE;
  }

  ngOnInit(): void {

    this.initForm();
    super.ngOnInit();
  }

  initForm() {
    this.modelForm = this.formBuilder.group({
      _id: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
      title: ['', <any>Validators.required],
      items: this.formBuilder.array([])
    });
  }

  populateForm = (result: ProductFeatureModel): void => {
    this.initForm();
    if (result && result.items && result.items.length) {
      this.addItem(result.items.length);
    }
    this.modelForm.patchValue(this.transformModelToFormValues(result));
  };

  initItem(): FormGroup {
    return this.formBuilder.group({
      _id: ['', Validators.required],
      title: ['', Validators.required],
    });
  }

  addItem(times: number = 1, event: any = null): void {
    const control = <FormArray>this.modelForm.controls['items'];
    for (let i = 0; i < times; i++) {
      control.push(this.initItem());
    }
  }

  removeItem(i: number): void {
    const control = <FormArray>this.modelForm.controls['items'];
    control.removeAt(i);
  }
}
