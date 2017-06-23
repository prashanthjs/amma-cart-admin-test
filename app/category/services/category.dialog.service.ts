import {Injectable} from '@angular/core';
import {Modal} from 'angular2-modal/plugins/bootstrap';
import {CategoryFormModal} from "../components/category-form/category.form.modal";
import {AppDialogService} from "../../shared/core/app.dialog.service";
import {CategoryModel} from "../model/category.model";
import {CategoryDataService} from "./category.data.service";
import {CATEGORY_DELETE_TITLE, CATEGORY_DELETE_MESSAGE} from "../config/index";

@Injectable()
export class CategoryDialogService extends AppDialogService<CategoryModel>{

  constructor(modal: Modal,
              dataService: CategoryDataService) {
      super(modal, dataService);
      this.formModal = CategoryFormModal;
      this.deleteTitle = CATEGORY_DELETE_TITLE;
      this.deleteMessage = CATEGORY_DELETE_MESSAGE;
  }
}
