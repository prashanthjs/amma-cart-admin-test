import {Injectable} from '@angular/core';
import {Modal} from 'angular2-modal/plugins/bootstrap';
import {ProductFormModal} from "../components/product-form/product.form.modal";
import {AppDialogService} from "../../shared/core/app.dialog.service";
import {ProductModel} from "../model/product.model";
import {ProductDataService} from "./product.data.service";
import {PRODUCT_DELETE_TITLE, PRODUCT_DELETE_MESSAGE} from "../config/index";

@Injectable()
export class ProductDialogService extends AppDialogService<ProductModel>{

  constructor(modal: Modal,
              dataService: ProductDataService) {
      super(modal, dataService);
      this.formModal = ProductFormModal;
      this.deleteTitle = PRODUCT_DELETE_TITLE;
      this.deleteMessage = PRODUCT_DELETE_MESSAGE;
  }
}
