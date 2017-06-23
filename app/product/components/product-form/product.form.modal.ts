import {Component} from '@angular/core';

import {DialogRef} from 'angular2-modal';
import {FormBuilder, Validators} from "@angular/forms";
import {ProductModel} from "../../model/product.model";
import {ToastyService} from "ng2-toasty";
import {
  PRODUCT_LOADING_ERROR_MESSAGE, PRODUCT_SAVE_ERROR_MESSAGE, PRODUCT_SAVE_SUCCESS_MESSAGE
} from "../../config/index";
import {AppModal, FormModalContext} from "../../../shared/core/app.modal";
import {ProductDataService} from "../../services/product.data.service";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";


@Component({
  selector: 'product-modal-content',
  moduleId: module.id,
  templateUrl: 'product.form.modal.template.html',
})
export class ProductFormModal extends AppModal<ProductModel> {

  imageLoading: boolean = false;

  constructor(dialog: DialogRef<FormModalContext>,
              formBuilder: FormBuilder,
              dataService: ProductDataService,
              toastyService: ToastyService,
              loadingService: SlimLoadingBarService) {
    super(dialog, formBuilder, dataService, toastyService, loadingService);
    this.loadingMessageError = PRODUCT_LOADING_ERROR_MESSAGE;
    this.saveSuccessMessage = PRODUCT_SAVE_SUCCESS_MESSAGE;
    this.saveErrorMessage = PRODUCT_SAVE_ERROR_MESSAGE;
  }

  ngOnInit(): void {

    this.modelForm = this.formBuilder.group({
      _id: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
      title: ['', <any>Validators.required],
      sku: ['', <any>Validators.required],
      categories: [[], <any>Validators.required],
      price: this.formBuilder.group({
        sell: [null, <any>Validators.required],
        cost: [null, <any>Validators.required],
        list: [null, <any>Validators.required]
      }),
      promoText: [''],
      shortDescription: [''],
      description: [''],
      images: [[]],
      inventory: this.formBuilder.group({
        stock: [null, <any>Validators.required],
        quantity: this.formBuilder.group({
          min: [null, <any>Validators.required],
          max: [null, <any>Validators.required],
          step: [null, <any>Validators.required]
        })
      }),
      shipping: this.formBuilder.group({
        weight: [null, <any>Validators.required],
        freeShipping: [false, <any>Validators.required],
        box: this.formBuilder.group({
          breadth: [null, <any>Validators.required],
          width: [null, <any>Validators.required],
          height: [null, <any>Validators.required]
        })
      }),
      tags: [[]],

      available: this.formBuilder.group({
        store: this.formBuilder.group({
          name: ['', <any>Validators.required],
          availableToChildren: [false, <any>Validators.required]
        }),
        userGroup: [[], <any>Validators.required]
      }),
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
