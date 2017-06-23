import {Injectable} from '@angular/core';
import {Modal} from 'angular2-modal/plugins/bootstrap';
import {StoreFormModal} from "../components/store-form/store.form.modal";
import {AppDialogService} from "../../shared/core/app.dialog.service";
import {StoreModel} from "../model/store.model";
import {StoreDataService} from "./store.data.service";
import {STORE_DELETE_TITLE, STORE_DELETE_MESSAGE} from "../config/index";

@Injectable()
export class StoreDialogService extends AppDialogService<StoreModel>{

  constructor(modal: Modal,
              dataService: StoreDataService) {
      super(modal, dataService);
      this.formModal = StoreFormModal;
      this.deleteTitle = STORE_DELETE_TITLE;
      this.deleteMessage = STORE_DELETE_MESSAGE;
  }
}
