import {Component} from '@angular/core';

import {DialogRef} from 'angular2-modal';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {CategoryModel} from "../../model/category.model";
import {ToastyService} from "ng2-toasty";
import {
  CATEGORY_LOADING_ERROR_MESSAGE, CATEGORY_SAVE_ERROR_MESSAGE, CATEGORY_SAVE_SUCCESS_MESSAGE
} from "../../config/index";
import {AppModal, FormModalContext} from "../../../shared/core/app.modal";
import {CategoryDataService} from "../../services/category.data.service";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";


@Component({
  selector: 'category-modal-content',
  moduleId: module.id,
  templateUrl: 'category.form.modal.template.html',
})
export class CategoryFormModal extends AppModal<CategoryModel> {

  imageLoading: boolean = false;

  constructor(dialog: DialogRef<FormModalContext>,
              formBuilder: FormBuilder,
              dataService: CategoryDataService,
              toastyService: ToastyService,
              loadingService: SlimLoadingBarService) {
    super(dialog, formBuilder, dataService, toastyService, loadingService);
    this.loadingMessageError = CATEGORY_LOADING_ERROR_MESSAGE;
    this.saveSuccessMessage = CATEGORY_SAVE_SUCCESS_MESSAGE;
    this.saveErrorMessage = CATEGORY_SAVE_ERROR_MESSAGE;
  }

  ngOnInit(): void {

    this.modelForm = this.formBuilder.group({
      _id: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
      title: ['', <any>Validators.required],
      description: '',
      parent: '',
      images: [],
      isActive: false
    });
    super.ngOnInit();
  }

  removeImage(index: number): void {
    const imageFormElement = this.modelForm.get('images');
    const values = imageFormElement.value || [];
    values.splice(index, 1);
    imageFormElement.setValue(values);
  }

  resetStates(): void {
    super.resetStates();
    this.imageLoading = false;
  }
}
