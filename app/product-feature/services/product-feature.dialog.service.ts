import {Injectable} from '@angular/core';
import {Modal} from 'angular2-modal/plugins/bootstrap';
import {ProductFeatureFormModal} from "../components/product-feature-form/product-feature.form.modal";
import {AppDialogService} from "../../shared/core/app.dialog.service";
import {ProductFeatureModel} from "../model/product-feature.model";
import {ProductFeatureDataService} from "./product-feature.data.service";
import {PRODUCT_FEATURE_DELETE_TITLE, PRODUCT_FEATURE_DELETE_MESSAGE} from "../config/index";

@Injectable()
export class ProductFeatureDialogService extends AppDialogService<ProductFeatureModel>{

  constructor(modal: Modal,
              dataService: ProductFeatureDataService) {
      super(modal, dataService);
      this.formModal = ProductFeatureFormModal;
      this.deleteTitle = PRODUCT_FEATURE_DELETE_TITLE;
      this.deleteMessage = PRODUCT_FEATURE_DELETE_MESSAGE;
  }
}
